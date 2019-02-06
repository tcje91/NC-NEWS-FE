import React, { Component } from "react";
import ArticleBody from "./ArticleBody";
import ArticlePostInfo from "./ArticlePostInfo";
import "./Article.css";
import { getArticleById } from "../../utils/API";

export default class ArticleContainer extends Component {
  state = {
    article: {}
  };

  render() {
    const { article } = this.state;
    console.log(article);
    return (
      <div className="ArticleContainer">
        <ArticlePostInfo article={article} />
        <ArticleBody article={article} />
      </div>
    );
  }

  componentDidMount() {
    const { article_id } = this.props;
    getArticleById(article_id).then(article => {
      this.setState({ article });
    });
  }
}
