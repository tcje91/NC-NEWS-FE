import React, { Component } from "react";
import { getArticles, getTopArticles } from "../../utils";
import ArtSumDisplay from "./ArtSumDisplay";
import "./Home.css"

export default class Home extends Component {
  state = {
    recentArticles: [],
    topArticles: []
  };
  render() {
    const { recentArticles, topArticles } = this.state;
    return (
      <div className="HomeContainer">
        <h1>HOME</h1>
        <div className="DisplayContainer">
          <ArtSumDisplay label="RECENT ARTICLES" articles={recentArticles} />
          <ArtSumDisplay label="TOP ARTICLES" articles={topArticles} />
        </div>
      </div>
    );
  }

  async componentDidMount() {
    const recentArticlesAll = await getArticles();
    const recentArticles = recentArticlesAll.slice(0, 3);
    const topArticlesAll = await getTopArticles();
    const topArticles = topArticlesAll.slice(0, 3);
    this.setState({ recentArticles, topArticles });
    console.log(recentArticles);
  }
}
