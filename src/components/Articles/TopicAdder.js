import React, { Component } from "react";
import { addTopic } from "../../utils/API";

export default class TopicAdder extends Component {
  state = {
    newTopicTitle: "",
    newTopicDesc: ""
  };

  render() {
    return (
      <div>
        <label>NEW TOPIC:</label>
        <input
          onChange={this.handleTopicTitleInput}
          placeholder="Topic title"
          required
        />
        <input
          onChange={this.handleTopicDescInput}
          className="DescInput"
          placeholder="Topic description"
          required
        />
      </div>
    );
  }

  handleTopicTitleInput = event => {
    const currentInput = event.target.value;
    this.setState({ newTopicTitle: currentInput });
  };

  handleTopicDescInput = event => {
    const currentInput = event.target.value;
    this.setState({ newTopicDesc: currentInput });
  };

  handleSubmitClick = event => {
    const { newTopicTitle, newTopicDesc } = this.state;
    this.setState({ newTopicTitle: "", newTopicDesc: "" });
    addTopic({ slug: newTopicTitle, description: newTopicDesc });
  };
}
