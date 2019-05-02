import React, { Component } from "react";
import { connect } from "react-redux";
import { Feed, Icon, Segment } from "semantic-ui-react";
import { addLike, removeLike, deletePost } from "../../actions/post";

class Post extends Component {
  state = {
    name: "",
    body: "",
    date: "",
    likes: 0,
    avatar: ""
  };

  render() {
    const { name, avatar, date, likes, text } = this.props.post;
    console.log(this.props.auth.user);
    console.log(this.props.post.likes);
    return (
      <Segment compact>
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
                <Feed.Like>
                  <Icon name="like" />
                  {likes.length} Likes
                </Feed.Like>
              </Feed.Meta>
            </Feed.Content>
          </Feed.Event>
        </Feed>
      </Segment>
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
