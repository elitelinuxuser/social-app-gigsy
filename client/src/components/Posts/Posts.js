import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import Post from "./Post";
import PropTypes from "prop-types";
import { getPosts } from "../../actions/post";
import { connect } from "react-redux";
import CreatePost from "./createPost";

class Posts extends Component {
  async componentDidMount() {
    const { getPosts } = this.props;

    await getPosts();
  }

  async componentDidUpdate() {
    const { getPosts } = this.props;

    await getPosts();
  }

  render() {
    const { posts } = this.props.post;
    return (
      <Container>
        <CreatePost />
        {posts.map(post => (
          <Post key={post._id} post={post} />
        ))}
      </Container>
    );
  }
}

Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  post: state.post
});

export default connect(
  mapStateToProps,
  { getPosts }
)(Posts);
