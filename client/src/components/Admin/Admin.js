import React, { Component, TextArea } from 'react';
import PropTypes from 'prop-types';
import {
  Divider,
  Segment,
  Container,
  Header,
  Menu,
  Form,
  Button,
  Card,
  Image,
  FormTextArea
} from 'semantic-ui-react';
import { Tab } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';
import { getPendingProfiles } from '../../actions/profile';
import ProfileCard from './ProfileCard';

class Admin extends Component {
  state = {};

  async componentDidMount() {
    const { getPendingProfiles } = this.props;
    await getPendingProfiles();
    console.log(this.props);
  }

  handleSubmit = () => this.setState({ text: '' });
  state = { activeItem: 'admin', authenticated: true };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  handleLogout = async () => {
    const { logout } = this.props;
    await logout();
    this.setState({
      authenticated: false
    });
  };

  handleApproved() {
    alert('Mail sent');
  }
  handleDeclined() {
    alert('Mail sent successfully');
  }

  render() {
    const { activeItem } = this.state;
    const { profiles } = this.props;

    return (
      <div>
        <Segment inverted>
          <Menu inverted pointing secondary>
            <Menu.Item
              name='home'
              active={activeItem === 'home'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='profile'
              active={activeItem === 'profile'}
              onClick={this.handleItemClick}
            />
            <Menu.Menu position='right'>
              <Menu.Item
                name='logout'
                active={activeItem === 'logout'}
                onClick={this.handleLogout}
              />
            </Menu.Menu>
          </Menu>
        </Segment>
        <Container style={{ marginTop: '3em' }}>
          <Segment compact>
            <Card.Group>
              {/* {console.log(profiles)} */}
              {profiles.map(profile => (
                <ProfileCard key={profile._id} profile={profile} />
              ))}
            </Card.Group>
          </Segment>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  profiles: state.profile.profiles
});

export default connect(
  mapStateToProps,
  { logout, getPendingProfiles }
)(Admin);
