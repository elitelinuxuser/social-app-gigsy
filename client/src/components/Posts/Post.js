import React, { Component } from "react";
import { connect } from "react-redux";
import { Feed, Icon, Segment, Container } from "semantic-ui-react";
import { addLike, removeLike, deletePost } from "../../actions/post";
import { loadUser } from "../../actions/auth";
import "./Posts.css";


class Post extends Component {
  state = {
    liked: false
  };

  async componentDidMount() {
    const { loadUser } = this.props;
    await loadUser();
    const { user } = this.props.auth;
    const { likes } = this.props.post;
    this.setState({
      liked: likes.some(like => like.user === user._id)
    });
  }

  handleLike = async () => {
    const { addLike } = this.props;
    const { _id } = this.props.post;

    await addLike(_id);
    const { user } = this.props.auth;
    const { likes } = this.props.post;
    this.setState({
      liked: likes.some(like => like.user === user._id)
    });
  };

  render() {
    const { liked } = this.state;
    const { name, avatar, date, likes, text } = this.props.post;
    return (
      <Container className="mb-4" align="center">
        <Segment className="segment">
          <Feed>
            <Feed.Event>
              <Feed.Label image={avatar} />
              <Feed.Content>
                <Feed.Summary>
                  <a>{name}</a>
                  <Feed.Date>{date}</Feed.Date>
                </Feed.Summary>
                <Feed.Extra text>{text}</Feed.Extra>
                <Feed.Meta>
                  <Feed.Like onClick={this.handleLike}>
                    <Icon name="like" color={liked ? "red" : "grey"} />
                    {likes.length} Likes
                  </Feed.Like>
                </Feed.Meta>
              </Feed.Content>
            </Feed.Event>
          </Feed>
        </Segment>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { addLike, removeLike, deletePost, loadUser }
)(Post);
