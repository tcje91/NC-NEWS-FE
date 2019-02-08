import React, { Component } from "react";
import { getSortedArticles } from "../../utils/API";

export default class SortBar extends Component {
  state = {
    sort_by: "created_at",
    order: "desc",
    limit: "10"
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="SortForm">
        <div>
          <label>Sort By:</label>
          <select
            id="sort_by"
            className="customSelect"
            onChange={this.handleSortChange}
            defaultValue="created_at"
          >
            <option value="created_at" defaultValue>Date Added</option>
            <option value="votes">Popularity</option>
            <option value="comment_count">Comments</option>
            <option value="topic">Topic</option>
            <option value="title">Title</option>
            <option value="author">Author</option>
          </select>
          </div>
          <div>
          <label>Order:</label>
          <select
            id="order"
            className="customSelect"
            onChange={this.handleOrderChange}
            defaultValue="desc"
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
          </div>
          <div>
          <label>Results per page:</label>
          <select
            id="limit"
            className="customSelect"
            onChange={this.handleLimitChange}
            defaultValue="10"
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
          </select>
          </div>
          <button type="submit" className="SubmitButton">Sort</button>
        </form>
      </div>
    );
  }

  handleSortChange = event => {
    this.setState({ sort_by: event.target.value });
  };

  handleOrderChange = event => {
    this.setState({ order: event.target.value });
  };

  handleLimitChange = event => {
    this.setState({ limit: event.target.value });
  };

  handleSubmit = event => {
      event.preventDefault();
      const { sort_by, order, limit } = this.state;
      const { setSortedArticles } = this.props;
      getSortedArticles(sort_by, order, limit).then(articles => setSortedArticles(articles))
  }
}
