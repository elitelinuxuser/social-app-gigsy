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
import { Link, Redirect } from 'react-router-dom';
import { logout } from '../../actions/auth';
import { getPendingProfiles } from '../../actions/profile';
import ProfileCard from './ProfileCard';

class Admin extends Component {
  state = { activeItem: 'admin', authenticated: true };

  async componentDidMount() {
    const { getPendingProfiles } = this.props;
    await getPendingProfiles();
    console.log(this.props);
  }

  handleSubmit = () => this.setState({ text: '' });

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  handleLogout = async () => {
    const { logout } = this.props;
    this.setState({
      authenticated: false
    });
    await logout();
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
    const { user } = this.props;
    const { authenticated } = this.state;
    if (authenticated) {
      return (
        <div>
          <Segment inverted>
            <Menu inverted pointing secondary>
              <Menu.Menu position='right'>
                <Link exact to='/login'>
                  <Menu.Item
                    name='logout'
                    active={activeItem === 'logout'}
                    onClick={this.handleLogout}
                  />
                </Link>
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
    } else return <Redirect to='/login' />;
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
