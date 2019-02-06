import React, { Component } from "react";
import { getCommentsByArticle } from "../../utils/API";
import Comment from "./Comment";
import CommentAdder from "./CommentAdder";

export default class Comments extends Component {
  state = {
    comments: [],
    addingComment: false,
  };

  componentDidMount = () => {
    getCommentsByArticle(this.props.article_id).then(comments =>
      this.setState({ comments })
    );
  };

  render() {
    const { comments, addingComment } = this.state;
    const { currentUser, article_id } = this.props;
    return (
      <>
        {currentUser && <button className="AddButton" onClick={this.toggleAdding}>Add a comment</button>}
        <div className="CommentsContainer">
        {addingComment && <CommentAdder currentUser={currentUser} article_id={article_id} toggleAdding={this.toggleAdding} renderNewComment={this.renderNewComment}/>}
          {comments.map(comment => (
            <Comment
              currentUser={currentUser}
              key={comment.comment_id}
              comment={comment}
            />
          ))}
        </div>
      </>
    );
  }

  toggleAdding = () => {
      this.setState(prevState => ({ addingComment: !prevState.addingComment}))
  }

  renderNewComment = comment => {
      this.setState(prevState => ({ comments: [comment, ...prevState.comments]}))
  }
}
