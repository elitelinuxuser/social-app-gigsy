import React from "react";
import { Container, Button, Header, Form, Input } from "semantic-ui-react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addPost } from "../../actions/post";
import "./Posts.css";

class createPost extends React.Component {
  state = { text: "", fileUrl: null };

  handleChange = e => this.setState({ text: e.target.value });

  handleImageChange = async e => {
    e.preventDefault();

    let file = e.target.files[0];

    console.log(file);

    await this.setState({
      fileUrl: file
    });
  };

  handleSubmit = async () => {
    const { text, fileUrl } = this.state;
    const { addPost } = this.props;
    await addPost({ text, fileUrl });
    this.setState({
      text: "",
      file: null
    });
  };
  //helper method
  render() {
    const { text } = this.state;
    return (
      <Container>
        <Header as="h1" dividing>
          Please create the post
        </Header>
        <Form onSubmit={this.handleSubmit}>
          {/* <Form.Field
            label="Post Title:"
            name="postname"
            placeholder="What's in your mind?"
            value={postname}
            control="textarea"
            rows="1"
          /> */}
          <Form.Field
            label="Write your post:"
            name="text"
            placeholder="What's up!"
            onChange={this.handleChange}
            value={text}
            control="textarea"
            rows="5"
          />
          Upload Image/Video{" "}
          <Input
            type="file"
            accept="video/*,image/*"
            className="upload"
            onChange={e => this.handleImageChange(e)}
          />
          <Form.Group inline>
            <Form.Button content="Submit" />
            <Link to="/">
              <Button content="Cancel" />
            </Link>
          </Form.Group>
        </Form>
      </Container>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  { addPost }
)(createPost);
