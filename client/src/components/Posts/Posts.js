import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import Post from "./Post";
import PropTypes from "prop-types";
import { getPosts } from "../../actions/post";
import { connect } from "react-redux";

class Posts extends Component {
  componentDidMount() {
    const { getPosts } = this.props;

    getPosts();
  }

  render() {
    const { posts } = this.props.post;
    return posts.map(post => <Post key={post._id} post={post} />);
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
