import React, { Component } from "react";
import { getUserByUsername } from "../../utils/API";

export default class UserLogin extends Component {
  state = {
    userInput: "",
    userErr: false
  };

  render() {
    const { userInput, userErr } = this.state;
    return (
      <div className="right">
        <p className="SpaceCapsTitle">USER LOGIN</p>
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="USERNAME"
            onChange={this.handleChange}
            value={userInput}
          />
        </form>
        {userErr && <p className="SpaceCapsTitle warning">INVALID USERNAME</p>}
      </div>
    );
  }

  handleChange = event => {
    this.setState({ userInput: event.target.value, userErr: false });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { setUser } = this.props;
    const { userInput } = this.state;
    getUserByUsername(userInput)
      .then(user => {
        setUser(user);
      })
      .catch(err => {
        console.log(err)
        this.setState({ userErr: true })
      });
    this.setState({ userInput: "" });
  };
}
