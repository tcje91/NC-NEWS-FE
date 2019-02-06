import React, { Component } from "react";
import { formatTimestamp, voteOnComment } from "../../utils/API";

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
        { currentUser && <>
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
        </>}
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
}
