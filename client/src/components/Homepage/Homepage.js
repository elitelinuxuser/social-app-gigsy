import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import Posts from "../Posts/Posts";
import Profile from "../Profile/Profile";
import { connect } from "react-redux";
import { logout, loadUser } from "../../actions/auth";
import { Redirect } from "react-router-dom";

class Homepage extends Component {
  state = { activeItem: "home", authenticated: true };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  handleLogout = async () => {
    const { logout } = this.props;
    await logout();
    this.setState({
      authenticated: false
    });
  };

  async componentDidMount() {
    const { loadUser } = this.props;
    await loadUser();
  }

  render() {
    const { activeItem } = this.state;
    const { authenticated } = this.state;
    let content;
    console.log(this.props);

    if (activeItem === "home") {
      content = <Posts />;
    } else if (activeItem === "profile") {
      content = <Profile />;
    }

    if (authenticated)
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

          {content}
        </div>
      );
    else return <Redirect to="/login" />;
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { logout, loadUser }
)(Homepage);
