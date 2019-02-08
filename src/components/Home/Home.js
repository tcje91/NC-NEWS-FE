import React, { Component } from "react";
import { getArticles, getTopArticles } from "../../utils/API";
import ArtSumDisplay from "./ArtSumDisplay";
import "./Home.css";
import Welcome from "./Welcome";

export default class Home extends Component {
  state = {
    recentArticles: [],
    topArticles: []
  };
  render() {
    const { recentArticles, topArticles } = this.state;
    const { currentUser } = this.props;
    return (
      <div className="HomeContainer">
        <Welcome currentUser={currentUser} />
        <h1>HOME</h1>
        <div className="DisplayContainer">
          <ArtSumDisplay label="RECENT ARTICLES" articles={recentArticles} className="recentArts" />
          <ArtSumDisplay label="TOP ARTICLES" articles={topArticles} className="topArts"/>
        </div>
      </div>
    );
  }

  async componentDidMount() {
    getArticles().then(articles => {
      this.setState({ recentArticles: articles.slice(0, 3) });
    });
    getTopArticles().then(articles => {
      this.setState({ topArticles: articles.slice(0, 3) });
    });
  }
}
