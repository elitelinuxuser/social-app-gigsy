import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactPlayer from 'react-player';
import ModalImage from 'react-modal-image';
import {
  Feed,
  Icon,
  Header,
  Image,
  Loader,
  Segment,
  Divider,
  Container,
  Transition
} from 'semantic-ui-react';
import { addLike, removeLike, deletePost } from '../../actions/post';
import { loadUser } from '../../actions/auth';
import './Posts.css';

class Post extends Component {
  state = {
    liked: false,
    visible: false,
    showDelete: false,
    isOpen: false
  };

  async componentDidMount() {
    const { loadUser } = this.props;
    await loadUser();
    const { auth } = this.props;
    const { likes, user } = this.props.post;
    this.setState({
      liked: likes.some(like => like.user === auth.user._id),
      showDelete: user === auth.user._id,
      visible: true
    });
  }

  handleLike = async () => {
    const { addLike, removeLike } = this.props;
    const { liked } = this.state;
    const { _id } = this.props.post;

    if (liked) {
      await removeLike(_id);
    } else {
      await addLike(_id);
    }

    const { user } = this.props.auth;
    const { likes } = this.props.post;
    this.setState({
      liked: likes.some(like => like.user === user._id)
    });
  };

  handleDelete = async () => {
    this.setState({
      visible: false
    });
    const { deletePost } = this.props;
    const { _id } = this.props.post;

    await deletePost(_id);
  };

  render() {
    const { liked, visible, showDelete } = this.state;
    const url = 'http://localhost:5000/';
    const {
      name,
      avatar,
      date,
      likes,
      text,
      fileUrl,
      mimeType
    } = this.props.post;
    console.log(fileUrl);
    return (
      <Transition visible={visible} animation='drop' duration={500}>
        <Container className='mb-4' align='center'>
          <Segment className='segment'>
            <Feed>
              <Feed.Event>
                <Feed.Label image={avatar} />
                <Feed.Content>
                  <Feed.Summary>
                    <a>{name}</a>
                    <Feed.Date>{date}</Feed.Date>
                  </Feed.Summary>
                  <Feed.Extra text>{text}</Feed.Extra>
                  {mimeType ? (
                    mimeType.startsWith('image') && (
                      <Image>
                        <a>
                          <div style={{ maxWidth: '500px' }}>
                            <ModalImage
                              small={url + fileUrl}
                              large={url + fileUrl}
                              alt='Photos'
                            />
                          </div>
                        </a>
                      </Image>
                    )
                  ) : (
                    <Loader />
                  )}
                  {mimeType ? (
                    mimeType.startsWith('video') && (
                      <ReactPlayer url={url + fileUrl} controls />
                    )
                  ) : (
                    <Loader />
                  )}
                  <Feed.Meta>
                    <Feed.Like onClick={this.handleLike}>
                      <Icon name='like' color={liked ? 'red' : 'grey'} />
                      {likes.length} Likes
                    </Feed.Like>
                    {showDelete && <a onClick={this.handleDelete}>Delete</a>}
                  </Feed.Meta>
                </Feed.Content>
              </Feed.Event>
            </Feed>
          </Segment>
        </Container>
      </Transition>
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
