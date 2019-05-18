import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import Posts from "../Posts/Posts";
import { connect } from "react-redux";
import { logout, loadUser } from "../../actions/auth";

class Homepage extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  handleLogout = () => {
    const { logout } = this.props;
    logout();
  };

  async componentDidMount() {
    const { loadUser } = this.props;
    await loadUser();
  }

  render() {
    const { activeItem } = this.state;
    console.log(this.props);

    return (
      <div>
        <Menu pointing secondary className='menu'>
          <Menu.Item className='menu-item'
            name="home"
            active={activeItem === "home"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="messages"
            active={activeItem === "messages"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="friends"
            active={activeItem === "friends"}
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

        <Posts />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { logout, loadUser }
)(Homepage);
