import React, { Component } from "react";
import ArtSumDisplay from "../Home/ArtSumDisplay";
import "./Articles.css";
import { getArticles } from "../../utils/API";
import ArticleAdder from "./ArticleAdder";

export default class Articles extends Component {
  state = {
    articles: [],
    addArticle: false
  };
  render() {
    const { articles, addArticle } = this.state;
    const { currentUser } = this.props;
    return (
      <div className="ArticlesContainer">
        <h1>ARTICLES</h1>
        {currentUser && <button onClick={this.toggleAddArticle}>SUBMIT AN ARTICLE</button>}
        {addArticle && currentUser && (
          <ArticleAdder
            currentUser={currentUser}
            toggleAddArticle={this.toggleAddArticle}
            renderNewArticle={this.renderNewArticle}
          />
        )}
        <ArtSumDisplay label="ARTICLES" articles={articles} />
      </div>
    );
  }

  componentDidMount() {
    getArticles().then(articles => {
      this.setState({ articles });
    });
  }

  toggleAddArticle = () => {
    this.setState(prevState => ({ addArticle: !prevState.addArticle }));
  };

  renderNewArticle = (article) => {
    console.log(article, "RENDERING ARTICLE")
    this.setState(prevState => ({ articles: [article, ...prevState.articles]}))
  }
}
