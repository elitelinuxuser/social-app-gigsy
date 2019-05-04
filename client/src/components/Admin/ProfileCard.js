import React, { Component } from "react";
import { Divider, Form, Button, Card, Image } from "semantic-ui-react";
import { connect } from "react-redux";
import { approveProfile, rejectProfile } from "../../actions/profile";

class ProfileCard extends Component {
  state = { text: "" };

  handleApprove = async () => {
    const { _id } = this.props.profile;
    const { approveProfile } = this.props;
    await approveProfile(_id);
  };

  handleReject = async () => {
    const { _id } = this.props.profile;
    const { text } = this.state;
    const { rejectProfile } = this.props;
    await rejectProfile(text, _id);
  };

  handleChange = e =>
    this.setState({
      text: e.target.value
    });

  render() {
    const { name, date, gender, location, bio, phone } = this.props.profile;
    const { text } = this.state;
    return (
      <Card fluid>
        <Card.Content>
          <Image
            verticalAlign="top"
            floated="right"
            size="tiny"
            circular
            src="https://react.semantic-ui.com/images/avatar/large/steve.jpg"
          />
          <Card.Header>{name}</Card.Header>
          <Card.Meta>{"+91" + phone}</Card.Meta>
          <Card.Meta>{location}</Card.Meta>
          <Card.Meta>
            <strong>Gender: </strong>
            {gender}
          </Card.Meta>
          <Card.Meta>
            <strong>Bio: </strong> {bio}
          </Card.Meta>
        </Card.Content>
        <Card.Content extra>
          <div>
            <h5>Any reasons for declining the request?</h5>
            <Form>
              <Form.TextArea
                name="reason"
                onChange={this.handleChange}
                value={text}
              />
            </Form>
          </div>
          <Divider hidden />
          <div>
            <Button color="green" onClick={this.handleApprove}>
              Approve
            </Button>
            <Button color="red" onClick={this.handleReject}>
              Decline
            </Button>
          </div>
        </Card.Content>
      </Card>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { approveProfile, rejectProfile }
)(ProfileCard);
