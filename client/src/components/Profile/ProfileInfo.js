import React, { Component } from "react";
import { Card } from "semantic-ui-react";

class ProfileInfo extends Component {
  render() {
    const { name, bio, phone, gender, location, username } = this.props.profile;
    return (
      <Card.Group>
        <Card fluid header={`Name: ${name}`} />
        <Card fluid header={`Username: ${username}`} />
        <Card fluid header={`Location: ${location}`} />
        <Card fluid header={`Gender: ${gender}`} />
        <Card fluid header={`Phone Number: ${phone}`} />
        <Card fluid header={`About Me: ${bio}`} />
      </Card.Group>
    );
  }
}

export default ProfileInfo;
