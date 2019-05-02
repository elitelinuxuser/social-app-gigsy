import React from 'react'
import { Container, Divider, Button, Header, Form } from "semantic-ui-react";
import { Link } from 'react-router-dom';

class createPost extends React.Component {
  state = { postname: "", postdetails: "" };

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  handleSubmit = () => {
    const { postname, postdetails } = this.state;

    this.setState({
      postname: "",
      postdetails: ""
    });
  };
  //helper method
  render() {
    const { postname, postdetails } = this.state;
    return (
      <Container>
        <Divider />
        <Header as="h1" dividing>
          Please create the post
        </Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Field
            label="Post Title:"
            name="postname"
            placeholder="What's in your mind?"
            value={postname}
            control="textarea"
            rows="1"
          />
          <Form.Field
            label="Write your post:"
            name="postdetails"
            placeholder="What's up!"
            value={postdetails}
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
        <Divider />
      </Container>
    );
  }
}

export default createPost;
