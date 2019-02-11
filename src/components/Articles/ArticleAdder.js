import React, { Component } from "react";
import { postArticleToTopic, getTopics, addTopic } from "../../utils/API";

export default class ArticleAdder extends Component {
  state = {
    topics: [],
    titleInput: "",
    topicInput: "coding",
    bodyInput: "",
    newTopicTitle: "",
    newTopicDesc: ""
  };
  render() {
    const { titleInput, bodyInput, topics, topicInput } = this.state;
    return (
      <div className="ArticleAdder">
        <form onSubmit={this.handleSubmit}>
          <label>TOPIC:</label>
          <select
            value={this.state.topicInput}
            onChange={this.handleInput}
            className="customSelect"
            id="topicInput"
          >
            <option value="default" disabled>
              Topic
            </option>
            {topics.map(topic => {
              return (
                <option key={topic.slug} value={topic.slug}>
                  {topic.slug}
                </option>
              );
            })}
            <option key="newTopic" value="newTopic" className="red">
              Add New Topic
            </option>
          </select>
          <br />
          {topicInput === "newTopic" && (
            <div>
              <label>NEW TOPIC:</label>
              <input
                onChange={this.handleInput}
                placeholder="Topic title"
                id="newTopicTitle"
                required
              />
              <input
                onChange={this.handleInput}
                className="DescInput"
                placeholder="Topic description"
                id="newTopicDesc"
                required
              />
            </div>
          )}
          <br />
          <input
            onChange={this.handleInput}
            type="text"
            placeholder="Title"
            value={titleInput}
            id="titleInput"
            required
            className="TitleInput"
          />
          <br />
          <textarea
            onChange={this.handleInput}
            className="ArticleInput"
            type="text"
            placeholder="Article"
            value={bodyInput}
            id="bodyInput"
            required
          />
          <br />
          <button type="submit">SUBMIT</button>
        </form>
      </div>
    );
  }

  componentDidMount = () => {
    getTopics().then(topics => {
      this.setState({ topics });
    });
  };

  handleInput = event => {
    const { value, id } = event.target;
    this.setState({ [id]: value })
  }

  handleSubmit = event => {
    event.preventDefault();
    const {
      titleInput: title,
      topicInput: topic,
      bodyInput: body,
      newTopicTitle,
      newTopicDesc
    } = this.state;
    const {
      currentUser: { username },
      toggleAddArticle,
      renderNewArticle
    } = this.props;
    const data = { title, body, username };
    if (topic === "newTopic") {
      const newTopicInput = { slug: newTopicTitle, description: newTopicDesc };
      addTopic(newTopicInput)
        .then(newTopic => postArticleToTopic(data, newTopic.slug))
        .then(article => renderNewArticle(article))
        .catch(console.log);
    } else {
      console.log(topic, "TOPIIIIIIC")
      postArticleToTopic(data, topic)
        .then(article => renderNewArticle(article))
        .catch(console.log);
    }
    this.setState({
      titleInput: "",
      topicInput: "",
      bodyInput: "",
      newTopicTitle: "",
      newTopicDesc: ""
    });
    toggleAddArticle();
  };
}
