import React, { Component } from 'react'

export default class Article extends Component {

  state = {
      article: null,
  }  

  render() {
      console.log(this.props.article_id)
    return (
      <div>
        <p>Article No. {this.props.article_id}</p>
      </div>
    )
  }
}
