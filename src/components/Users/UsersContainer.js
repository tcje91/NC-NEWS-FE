import React, { Component } from "react";
import "./Users.css";
import User from "./User";
import Axios from "axios";

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
          {users.map(user => {
            return <User user={user} />;
          })}
        </div>
      </div>
    );
  }

  componentDidMount() {
    Axios.get("https://nc-news-tcje.herokuapp.com/api/users").then(
      ({ data: { users } }) => {
        this.setState({ users });
      }
    );
  }
}
