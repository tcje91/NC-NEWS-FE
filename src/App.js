import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { Router } from "@reach/router";
import Home from "./components/Home/Home";
import Articles from "./components/Articles/Articles";
import ArticleContainer from "./components/SingleArticle/ArticleContainer";
import UsersContainer from "./components/Users/UsersContainer";
import NotFound from "./components/Errors/NotFound";

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
          <Articles currentUser={currentUser} path="/articles" />
          <ArticleContainer currentUser={currentUser} path="/articles/:article_id" />
          <UsersContainer path="/users" />
          <NotFound default/>
        </Router>
      </div>
    );
  }

  componentDidMount = () => {
    const currentUser = sessionStorage.getItem('currentUser')
    if (currentUser) this.setUser(JSON.parse(currentUser))
  }


  setUser = user => {
    this.setState({ currentUser: user });
    sessionStorage.setItem('currentUser', JSON.stringify(user))
  };

  logOut = () => {
    this.setState({ currentUser: null })
    sessionStorage.setItem('currentUser', null)
  }
}

export default App;
