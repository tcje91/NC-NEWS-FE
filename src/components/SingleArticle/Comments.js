import React, { Component } from "react";
import { getCommentsByArticle } from "../../utils/API";
import Comment from "./Comment";
import CommentAdder from "./CommentAdder";

export default class Comments extends Component {
  state = {
    comments: [],
    addingComment: false,
    noComments: null
  };

  componentDidMount = () => {
    getCommentsByArticle(this.props.article_id)
      .then(comments => this.setState({ comments }))
      .catch(() => this.setState({ noComments: false }));
  };

  render() {
    const { comments, addingComment, noComments } = this.state;
    const { currentUser, article_id } = this.props;
    return (
      <>
        {currentUser && (
          <button className="AddCommentButton" onClick={this.toggleAdding}>
            Add a comment
          </button>
        )}
        <div className="CommentsContainer">
          {currentUser && addingComment && (
            <CommentAdder
              currentUser={currentUser}
              article_id={article_id}
              toggleAdding={this.toggleAdding}
              renderNewComment={this.renderNewComment}
            />
          )}
          {noComments === false ? (
            <p className="noComments">No comments to display</p>
          ) : (
            comments.map(comment => (
              <Comment
                currentUser={currentUser}
                key={comment.comment_id}
                comment={comment}
                renderRemainingComments={this.renderRemainingComments}
              />
            ))
          )}
        </div>
      </>
    );
  }

  toggleAdding = () => {
    this.setState(prevState => ({ addingComment: !prevState.addingComment }));
  };

  renderNewComment = comment => {
    this.setState(prevState => ({
      comments: [comment, ...prevState.comments]
    }));
  };

  renderRemainingComments = deletedComment_id => {
    const { comments } = this.state;
    const remainingComments = comments.filter(
      comment => comment.comment_id !== deletedComment_id
    );
    this.setState({ comments: remainingComments });
  };
}
