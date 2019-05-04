import React, { Component, TextArea } from "react";
import PropTypes from "prop-types";
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
} from "semantic-ui-react";
import { Tab } from "semantic-ui-react";

class MenuExampleSecondaryPointing extends Component {
  state = {};

  handleSubmit = () => this.setState({ text: "" });
  state = { activeItem: "admin", authenticated: true };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  handleLogout = async () => {
    const { logout } = this.props;
    await logout();
    this.setState({
      authenticated: false
    });
  };

  handleApproved() {
    alert("Mail sent");
  }
  handleDeclined() {
    alert("mail sent successfully");
  }

  render() {
    const { activeItem } = this.state;

    return (
      <div>
        <Menu pointing secondary>
          <Menu.Item
            name="home"
            active={activeItem === "home"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="profile"
            active={activeItem === "profile"}
            onClick={this.handleItemClick}
          />
          <Menu.Menu position="right">
            <Menu.Item
              name="logout"
              active={activeItem === "logout"}
              onClick={this.handleLogout}
            />
          </Menu.Menu>
        </Menu>
        <Container style={{ marginTop: "3em" }}>
          <Segment compact>
            <Card.Group>
              <Card fluid>
                <Card.Content>
                  <Image
                    verticalAlign="top"
                    floated="right"
                    size="tiny"
                    circular
                    src="https://react.semantic-ui.com/images/avatar/large/steve.jpg"
                  />
                  <Card.Header>Steve Sanders</Card.Header>
                  <Card.Meta>+643563455</Card.Meta>
                  <Card.Meta>reliance@gmail.com</Card.Meta>
                  <Card.Meta>
                    Steve wants to add you to the group{" "}
                    <strong>best friends</strong>
                  </Card.Meta>
                </Card.Content>
                <Card.Content extra>
                  <div>
                    <h5>Any reasons for declining the request?</h5>
                    <Form>
                      <Form.TextArea />
                    </Form>
                  </div>
                  <Divider hidden />
                  <div>
                    <Button color="green" onClick={this.handleApproved}>
                      Approve
                    </Button>
                    <Button color="red" onClick={this.handleDeclined}>
                      Decline
                    </Button>
                  </div>
                </Card.Content>
              </Card>

              <Card fluid>
                <Card.Content>
                  <Image
                    verticalAlign="top"
                    floated="right"
                    size="tiny"
                    circular
                    src="https://react.semantic-ui.com/images/avatar/large/molly.png"
                  />
                  <Card.Header>Molly Thomas</Card.Header>
                  <Card.Meta>+6352753</Card.Meta>
                  <Card.Meta>google@gmail.com</Card.Meta>
                  <Card.Meta>
                    Molly wants to add you to the group{" "}
                    <strong>musicians</strong>
                  </Card.Meta>
                </Card.Content>
                <Card.Content extra>
                  <div>
                    <h5>Any reasons for declining the request?</h5>
                    <Form>
                      <Form.TextArea />
                    </Form>
                  </div>
                  <Divider hidden />
                  <div>
                    <Button color="green" onClick={this.handleApproved}>
                      Approve
                    </Button>
                    <Button color="red" onClick={this.handleDeclined}>
                      Decline
                    </Button>
                  </div>
                </Card.Content>
              </Card>

              <Card fluid>
                <Card.Content>
                  <Image
                    verticalAlign="top"
                    floated="right"
                    size="tiny"
                    circular
                    src="https://react.semantic-ui.com/images/avatar/large/jenny.jpg"
                  />
                  <Card.Header>Jenny Lawrence</Card.Header>
                  <Card.Meta>+63525236</Card.Meta>
                  <Card.Meta>google@gmail.com</Card.Meta>
                  <Card.Meta>
                    Jenny requested permission to view your contact details
                  </Card.Meta>
                </Card.Content>
                <Card.Content extra>
                  <div>
                    <h5>Any reasons for declining the request?</h5>
                    <Form>
                      <Form.TextArea />
                    </Form>
                  </div>
                  <Divider hidden />
                  <div>
                    <Button color="green" onClick={this.handleApproved}>
                      Approve
                    </Button>
                    <Button color="red" onClick={this.handleDeclined}>
                      Decline
                    </Button>
                  </div>
                </Card.Content>
              </Card>

              <Card fluid>
                <Card.Content>
                  <Image
                    verticalAlign="top"
                    floated="right"
                    size="tiny"
                    circular
                    src="https://react.semantic-ui.com/images/avatar/large/jenny.jpg"
                  />
                  <Card.Header>Jenny Lawrence</Card.Header>
                  <Card.Meta>+3546253</Card.Meta>
                  <Card.Meta>google@gmail.com</Card.Meta>
                  <Card.Meta>
                    Jenny requested permission to view your contact details
                  </Card.Meta>
                </Card.Content>
                <Card.Content extra>
                  <div>
                    <h5>Any reasons for declining the request?</h5>
                    <Form>
                      <Form.TextArea />
                    </Form>
                  </div>
                  <Divider hidden />
                  <div>
                    <Button color="green" onClick={this.handleApproved}>
                      Approve
                    </Button>
                    <Button color="red" onClick={this.handleDeclined}>
                      Decline
                    </Button>
                  </div>
                </Card.Content>
              </Card>
            </Card.Group>
          </Segment>
        </Container>
      </div>
    );
  }
}

export default MenuExampleSecondaryPointing;
