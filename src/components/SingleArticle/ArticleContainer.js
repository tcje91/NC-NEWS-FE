import React, { Component } from "react";
import axios from "axios";
import ArticleBody from "./ArticleBody";
import ArticlePostInfo from "./ArticlePostInfo";
import "./Article.css"

export default class ArticleContainer extends Component {
  state = {
    article: {}
  };

  render() {
    const { article } = this.state;
    console.log(article)
    return (
      <div className="ArticleContainer">
        <ArticlePostInfo article={article}/>
        <ArticleBody article={article}/>
      </div>
    );
  }

  componentDidMount() {
    const { article_id } = this.props;
    axios
      .get(`https://nc-news-tcje.herokuapp.com/api/articles/${article_id}`)
      .then(({ data: { article } }) => {
        this.setState({ article });
      });
  }
}
