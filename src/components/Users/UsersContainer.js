import React, { Component } from "react";
import "./Users.css";
import User from "./User";
import { getUsers } from "../../utils/API";

export default class UsersContainer extends Component {
  state = {
    users: []
  };

  render() {
    const { users } = this.state;
    return (
      <div className="UsersPage">
        <h1>USERS</h1>
        <div className="UsersContainer">
          <br />
          {users && users[0] ? users.map(user => {
            return <User user={user} key={user.username} />;
          }) : <p className="Loading">Loading...</p>}
        </div>
      </div>
    );
  }

  componentDidMount() {
    getUsers().then(users => {
      this.setState({ users });
    });
  }
}
