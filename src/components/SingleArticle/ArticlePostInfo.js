import React, { Component } from "react";
import { formatTimestamp, voteOnArticle, deleteArticleById } from "../../utils/API";
import { navigate } from '@reach/router';

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
        {/* <p className="fancyTopic fancyFont">{article.topic}</p> */}
        <br />
        {currentUser && currentUser.username !== article.author && (
          <>
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
          </>
        )}
        {currentUser && currentUser.username === article.author && (
          <button onClick={this.handleArticleDelete}>DELETE ARTICLE</button>
        )}
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
  
  handleArticleDelete = () => {
    const {article: { article_id }} = this.props;
    console.log(article_id)
    deleteArticleById(article_id).then(() => {
      navigate('/articles');
    });
  }
}
