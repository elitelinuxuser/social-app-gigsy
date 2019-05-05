import React, { Component } from "react";
import { Container, Message, Button } from "semantic-ui-react";
import Post from "./Post";
import PropTypes from "prop-types";
import { getPosts } from "../../actions/post";
import { getCurrentProfile } from "../../actions/profile";
import { connect } from "react-redux";
import CreatePost from "./createPost";

class Posts extends Component {
  async componentDidMount() {
    const { getPosts, getCurrentProfile } = this.props;
    await getCurrentProfile();
    await getPosts();
    console.log(this.props);
  }

  async componentDidUpdate() {
    const { getPosts } = this.props;

    await getPosts();
  }

  render() {
    const { profile } = this.props.profile;
    let content;
    if (!profile) {
      content = <Message warning content="Profile not created yet!" />;
    } else {
      if (profile.status === "pending") {
        content = <Message warning content="Profile status: Pending" />;
      } else if (profile.status === "rejected") {
        content = (
          <Message
            warning
            content="Profile status: Rejected, Please submit the profile again"
          />
        );
      } else {
        content = <CreatePost />;
      }
    }
    const { posts } = this.props.post;
    return (
      <Container>
        {content}
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
  post: state.post,
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { getPosts, getCurrentProfile }
)(Posts);
