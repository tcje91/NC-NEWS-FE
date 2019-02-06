import React, { Component } from "react";
import ArtSumDisplay from "../Home/ArtSumDisplay";
import "./Articles.css";
import { getArticles } from "../../utils/API";

export default class Articles extends Component {
  state = {
    articles: []
  };
  render() {
    const { articles } = this.state;
    return (
      <div className="ArticlesContainer">
        <h1>ARTICLES</h1>
        <ArtSumDisplay label="ARTICLES" articles={articles} />
      </div>
    );
  }

  componentDidMount() {
    getArticles().then(articles => {
      this.setState({ articles });
    });
  }
}
