import React from "react";
import { Container, Button, Header, Form } from "semantic-ui-react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addPost } from "../../actions/post";

class createPost extends React.Component {
  state = { text: "" };

  handleChange = e => this.setState({ text: e.target.value });

  handleSubmit = async () => {
    const { text } = this.state;
    const { addPost } = this.props;
    await addPost({ text });
    this.setState({
      text: ""
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
