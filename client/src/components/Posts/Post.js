import React, { Component } from "react";
import { connect } from "react-redux";
import { Feed, Icon } from "semantic-ui-react";
import { addLike, removeLike, deletePost } from "../../actions/post";

class Post extends Component {
  state = {
    name: "",
    body: "",
    date: "",
    likes: 0
  };

  render() {
    const { name, body, date, likes } = this.state;
    return (
      <Feed.Event>
        <Feed.Label image="/images/avatar/small/joe.jpg" />
        <Feed.Content>
          <Feed.Summary>
            <a>{name}</a>
            <Feed.Date>{date}</Feed.Date>
          </Feed.Summary>
          <Feed.Extra text>{body}</Feed.Extra>
          <Feed.Meta>
            <Feed.Like>
              <Icon name="like" />
              {likes} Likes
            </Feed.Like>
          </Feed.Meta>
        </Feed.Content>
      </Feed.Event>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { addLike, removeLike, deletePost }
)(Post);
