import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { Router } from "@reach/router";
import Home from "./components/Home/Home"
import Articles from "./components/Articles";
import Users from "./components/Users";
import ArticleContainer from "./components/SingleArticle/ArticleContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Router>
          <Home path="/" />
          <Articles path="/articles" />
          <ArticleContainer path="/articles/:article_id" />
          <Users path="/users" />
        </Router>
      </div>
    );
  }
}

export default App;
