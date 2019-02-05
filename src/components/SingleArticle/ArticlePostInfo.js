import React, { Component } from "react";
import { formatTimestamp } from "../../utils";

export default class ArticlePostInfo extends Component {
  render() {
    const { article } = this.props;
    const date = article.created_at ? formatTimestamp(article.created_at) : "";
    return (
      <div className="ArticlePostInfo">
        <img className="userPicLarge" src="/default-user.png" alt="userImg" />
        <p>Posted by: {article.author}</p>
        <p>{date.date}</p>
        <p>{date.time}</p>
      </div>
    );
  }
}
