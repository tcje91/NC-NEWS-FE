import React, { Component } from 'react'
import ArtSumDisplay from '../Home/ArtSumDisplay';
import Axios from 'axios';
import './Articles.css'

export default class Articles extends Component {

  state = {
    articles: [],
  }
  render() {
    const { articles } = this.state;
    return (
      <div className="ArticlesContainer">
        <h1>ARTICLES</h1>
        <ArtSumDisplay label="ARTICLES" articles={articles} />
      </div>
    )
  }

  componentDidMount () {
    Axios.get('https://nc-news-tcje.herokuapp.com/api/articles')
    .then(({ data: { articles }}) => {
      this.setState({ articles })
    })
  }
}

