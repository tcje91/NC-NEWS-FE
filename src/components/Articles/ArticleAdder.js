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
            onChange={this.handleTopicInput}
            className="customSelect"
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
          )}
          <br />
          <input
            onChange={this.handleTitleInput}
            type="text"
            placeholder="Title"
            value={titleInput}
            required
            className="TitleInput"
          />
          <br />
          <textarea
            onChange={this.handleBodyInput}
            className="ArticleInput"
            type="text"
            placeholder="Article"
            value={bodyInput}
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

  handleTitleInput = event => {
    const currentInput = event.target.value;
    this.setState({ titleInput: currentInput });
  };

  handleTopicInput = event => {
    const currentInput = event.target.value;
    this.setState({ topicInput: currentInput });
  };

  handleBodyInput = event => {
    const currentInput = event.target.value;
    this.setState({ bodyInput: currentInput });
  };

  handleTopicTitleInput = event => {
    const currentInput = event.target.value;
    this.setState({ newTopicTitle: currentInput });
  };

  handleTopicDescInput = event => {
    const currentInput = event.target.value;
    this.setState({ newTopicDesc: currentInput });
  };

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
