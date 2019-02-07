import React, { Component } from "react";
import { postArticleToTopic, getTopics } from "../../utils/API";

export default class ArticleAdder extends Component {
  state = {
    topics: [],
    titleInput: "",
    topicInput: "",
    bodyInput: ""
  };
  render() {
    const { titleInput, bodyInput, topics } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>TOPIC:</label><select onChange={this.handleTopicInput} className="customSelect">
            <option disabled defaultValue>
              Topic
            </option>
            {topics.map(topic => {
              return <option key={topic.slug} value={topic.slug}>{topic.slug}</option>;
            })}
          </select>
          
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

  handleSubmit = event => {
    event.preventDefault();
    const {
      titleInput: title,
      topicInput: topic,
      bodyInput: body
    } = this.state;
    const {
      currentUser: { username },
      toggleAddArticle,
      renderNewArticle
    } = this.props;
    const data = { title, body, username };
    postArticleToTopic(data, topic)
      .then(article => renderNewArticle(article))
      .catch(console.log);
    this.setState({
      titleInput: "",
      topicInput: "",
      bodyInput: ""
    });
    toggleAddArticle();
  };
}
