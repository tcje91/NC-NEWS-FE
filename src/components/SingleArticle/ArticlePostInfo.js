import React, { Component } from "react";
import { formatTimestamp, voteOnArticle } from "../../utils/API";

export default class ArticlePostInfo extends Component {
  state = {
    voteChange: 0
  };
  render() {
    const { article, currentUser } = this.props;
    const { voteChange } = this.state;
    const date = article.created_at ? formatTimestamp(article.created_at) : "";
    return (
      <div className="ArticlePostInfo">
        <img className="userPicLarge" src="/default-user.png" alt="userImg" />
        <p>Posted by: {article.author}</p>
        <p>{date.date}</p>
        <p>{date.time}</p>
        <p>Votes: {article.votes + voteChange}</p>
        {currentUser && <>
        <button
          disabled={voteChange === -1}
          onClick={() => this.handleArticleVoteClick(-1)}
        >
          -VOTE
        </button>
        <button
          disabled={voteChange === 1}
          onClick={() => this.handleArticleVoteClick(1)}
        >
          +VOTE
        </button>
        </>}
      </div>
    );
  }

  handleArticleVoteClick = voteChange => {
    const { article } = this.props;
    voteOnArticle(voteChange, article.article_id);
    this.setState(prevState => {
      return {
        voteChange: prevState.voteChange + voteChange
      };
    });
  };
}
