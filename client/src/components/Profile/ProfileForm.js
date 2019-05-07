import React, { Component } from 'react';
import {
  Button,
  Checkbox,
  Form,
  Input,
  Radio,
  Segment,
  Message,
  Container,
  Header,
  TextArea
} from 'semantic-ui-react';
import { connect } from 'react-redux';
import { createProfile } from '../../actions/profile';

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' }
];
const style = {
  h1: {
    marginTop: '3em'
  }
};

class ProfileForm extends Component {
  state = {
    name: '',
    username: '',
    bio: '',
    gender: '',
    phone: '',
    location: ''
  };

  async componentDidMount() {
    const { edit, profile } = this.props;
    if (edit) {
      await this.setState({
        name: profile.name,
        username: profile.username,
        bio: profile.bio,
        gender: '',
        phone: profile.phone,
        location: profile.location
      });
    }
  }

  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value });

    console.log(this.state);
  };
  handleSubmit = async e => {
    const { edit, createProfile } = this.props;
    await createProfile(this.state, edit ? true : false);
    this.setState({
      name: '',
      username: '',
      bio: '',
      gender: '',
      phone: '',
      location: ''
    });
  };
  render() {
    const { name, username, bio, gender, phone, location } = this.state;
    return (
      <Container>
        <Header as='h1' style={style.h1} dividing>
          Please enter the details:
        </Header>
        <Message info>
          <p>
            We protect your data safely and we will not use it for monetory
            purposes.
          </p>
        </Message>
        <Segment inverted>
          <Form inverted onSubmit={this.handleSubmit}>
            <Form.Group widths='equal'>
              <Form.Input
                label='Full Name'
                name='name'
                placeholder='Full Name'
                value={name}
                onChange={this.handleChange}
              />
              <Form.Input
                label='Username'
                name='username'
                placeholder='Username'
                value={username}
                onChange={this.handleChange}
              />
              <Form.Select
                label='Gender'
                name='gender'
                value={gender}
                options={options}
                placeholder='Gender'
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Field
              control={TextArea}
              label='About Me'
              name='bio'
              onChange={this.handleChange}
              value={bio}
              placeholder='Tell us more about you...'
            />
            <Form.Group inline>
              <Form.Input
                label='Phone Number'
                name='phone'
                placeholder='Enter your phone number'
                value={phone}
                onChange={this.handleChange}
              />
              <Form.Input
                label='Location'
                name='location'
                placeholder='State/City'
                value={location}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Button inverted color='green'>
              Submit
            </Form.Button>
          </Form>
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
  { createProfile }
)(ProfileForm);
