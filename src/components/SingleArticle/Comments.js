import React, { Component } from "react";
import { getCommentsByArticle } from "../../utils/API";
import Comment from "./Comment";

export default class Comments extends Component {
  state = {
    comments: []
  };

  componentDidMount = () => {
    getCommentsByArticle(this.props.article_id).then(comments =>
      this.setState({ comments })
    );
  };

  render() {
    const { comments } = this.state;
    const { currentUser } = this.props;
    return (
      <div className="CommentsContainer">
        {comments.map(comment => (
          <Comment currentUser={currentUser} key={comment.comment_id} comment={comment} />
        ))}
      </div>
    );
  }
}
