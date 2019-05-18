import React, { Component } from "react";
import { connect } from "react-redux";
import { getCurrentProfile, createProfile } from "../../actions/profile";
import { Message, Container, Button } from "semantic-ui-react";

import ProfileInfo from "./ProfileInfo";
import ProfileForm from "./ProfileForm";

class Profile extends Component {
  state = {
    create: false,
    edit: false
  };

  async componentDidMount() {
    const { getCurrentProfile } = this.props;
    await getCurrentProfile();
  }

  handleUpdateProfile = async e => {
    await this.setState({
      edit: !this.state.edit
    });
  };

  handleCreateProfile = async e => {
    await this.setState({
      create: true
    });
  };

  render() {
    const { profile } = this.props.profile;
    const { create, edit } = this.state;
    let content;
    if (!profile) {
      content = (
        <Container>
          <Message content="Profile not created yet. Please create on now!" />{" "}
          <Button secondary onClick={this.handleCreateProfile}>
            Create Profile
          </Button>
          {create && <ProfileForm />}
        </Container>
      );
    } else {
      if (profile.status === "pending") {
        content = (
          <Container>
            <Message warning content="Profile status: Pending" />
            <ProfileInfo profile={profile} />
          </Container>
        );
      } else if (profile.status === "rejected") {
        content = (
          <Container>
            <Message
              warning
              content="Profile status: Rejected, Please submit the profile again"
            />{" "}
            <Button primary align="center" onClick={this.handleUpdateProfile}>
              {edit ? "Cancel" : "Update Profile"}
            </Button>{" "}
            {edit ? (
              <ProfileForm profile={profile} edit />
            ) : (
              <ProfileInfo profile={profile} />
            )}
          </Container>
        );
      } else {
        content = (
          <Container>
            <Message
              success
              content="Profile status: Approved. You have the ability to post!"
            />
            <ProfileInfo profile={profile} />
          </Container>
        );
      }
    }
    return content;
  }
}

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { getCurrentProfile, createProfile }
)(Profile);
