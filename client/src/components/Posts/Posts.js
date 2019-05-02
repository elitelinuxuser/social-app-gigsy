import React, { Component } from "react";
import { Feed, Icon, Container } from "semantic-ui-react";
import Post from "./Post";
import PropTypes from "prop-types";

class Posts extends Component {
  render() {
    return (
      <Container>
        <Feed>
          <Post />
        </Feed>
      </Container>
    );
  }
}

export default Posts;
