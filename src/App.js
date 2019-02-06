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
    currentUser: null
  };

  render() {
    const { currentUser } = this.state;
    return (
      <div className="App">
        <Header currentUser={currentUser} logOut={this.logOut} setUser={this.setUser} />
        <Router>
          <Home path="/" currentUser={currentUser}/>
          <Articles path="/articles" />
          <ArticleContainer path="/articles/:article_id" />
          <UsersContainer path="/users" />
        </Router>
      </div>
    );
  }

  setUser = user => {
    this.setState({ currentUser: user });
  };

  logOut = () => {
    this.setState({ currentUser: null })
  }
}

export default App;
