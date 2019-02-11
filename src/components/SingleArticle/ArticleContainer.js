import React, { Component } from "react";
import ArticleBody from "./ArticleBody";
import ArticlePostInfo from "./ArticlePostInfo";
import "./Article.css";
import { getArticleById } from "../../utils/API";
import Comments from "./Comments";
import { navigate } from "@reach/router";

export default class ArticleContainer extends Component {
  state = {
    article: {},
    commentsVisible: false
  };

  render() {
    const { article, commentsVisible } = this.state;
    const { article_id, currentUser } = this.props;
    return (
      <div className="ArticleContainer">
        <ArticlePostInfo currentUser={currentUser} article={article} />
        <ArticleBody article={article} />
        <button className="CommentsButton" onClick={this.toggleComments}>
          {commentsVisible ? "HIDE COMMENTS" : "SHOW COMMENTS"}
        </button>
        {commentsVisible && (
          <Comments currentUser={currentUser} article_id={article_id} />
        )}
      </div>
    );
  }

  toggleComments = () => {
    const { commentsVisible } = this.state;
    this.setState({ commentsVisible: !commentsVisible });
  };

  componentDidMount() {
    const { article_id } = this.props;
    getArticleById(article_id)
      .then(article => {
        this.setState({ article });
      })
      .catch(err => console.log(err, "ERROR HEEEERE") || navigate("/notfound", {replace: true}));
  }
}
