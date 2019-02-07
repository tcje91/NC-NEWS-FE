import React, { Component } from "react";
import { postCommentToArticle } from "../../utils/API";

export default class CommentAdder extends Component {
  state = {
    commentInput: ""
  };
  render() {
    const { commentInput } = this.state;
    return (
      <form className="CommentAdder" onSubmit={this.handleSubmit}>
        <textarea
          onChange={this.handleInput}
          className="ArticleInput"
          type="text"
          placeholder="Comment"
          value={commentInput}
          required
        />
        <br />
        <button type="submit">SUBMIT</button>
      </form>
    );
  }

  handleInput = event => {
    this.setState({ commentInput: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { currentUser, article_id, toggleAdding, renderNewComment } = this.props;
    const { commentInput } = this.state;
    const comment = { username: currentUser.username, body: commentInput };
    postCommentToArticle(comment, article_id)
      .then(comment => {
        console.log(comment)
        renderNewComment(comment);
      })
      .catch(console.log, "ERROR!");
    this.setState({ commentInput: "" });
    toggleAdding(); 
  };
}
