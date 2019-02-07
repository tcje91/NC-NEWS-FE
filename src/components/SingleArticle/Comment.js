import React, { Component } from "react";
import { formatTimestamp, voteOnComment, deleteComment } from "../../utils/API";

export default class Comment extends Component {
  state = {
    voteChange: 0
  };
  render() {
    const { comment, currentUser } = this.props;
    const { voteChange } = this.state;
    const timeStamp = formatTimestamp(comment.created_at);
    return (
      <div className="CommentItem">
        <h3 className="reduceMarginBot">{comment.author}</h3>
        <p>{timeStamp.date}</p>
        <p>{timeStamp.time}</p>
        <p>Votes: {comment.votes + voteChange}</p>
        {currentUser && currentUser.username !== comment.author && (
          <>
            <button
              disabled={voteChange === -1}
              onClick={() => this.handleCommentVoteClick(-1)}
              className="inlineButton"
            >
              -VOTE
            </button>
            <button
              disabled={voteChange === 1}
              onClick={() => this.handleCommentVoteClick(1)}
              className="inlineButton"
            >
              +VOTE
            </button>
          </>
        )}
        {currentUser && currentUser.username === comment.author && (
          <button className="inlineButton" onClick={this.handleCommentDelete}>
            DELETE COMMENT
          </button>
        )}
        <br />
        <p className="CommentBody">{comment.body}</p>
      </div>
    );
  }

  handleCommentVoteClick = voteChange => {
    const {
      comment: { article_id, comment_id }
    } = this.props;
    voteOnComment(voteChange, article_id, comment_id);
    this.setState(prevState => {
      return {
        voteChange: prevState.voteChange + voteChange
      };
    });
  };

  handleCommentDelete = () => {
    const { renderRemainingComments } = this.props;
    const {
      comment: { article_id, comment_id }
    } = this.props;
    deleteComment(article_id, comment_id).then(() => renderRemainingComments(comment_id))
  };
}
