import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { Router } from "@reach/router";
import Home from "./components/Home/Home";
import Articles from "./components/Articles/Articles";
import ArticleContainer from "./components/SingleArticle/ArticleContainer";
import UsersContainer from "./components/Users/UsersContainer";

class App extends Component {
  state = {
    currentUser: ""
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Router>
          <Home path="/" />
          <Articles path="/articles" />
          <ArticleContainer path="/articles/:article_id" />
          <UsersContainer path="/users" />
        </Router>
      </div>
    );
  }
}

export default App;
