import React from 'react'
import { formatTimestamp } from '../../utils/API'
import { Link } from '@reach/router';

const ArticleSummary = ({ title, author, votes, created_at, id, topic, comment_count }) => {
  return (
    <Link className="ArticleSummaryItem" to={`/articles/${id}`}>
      <p className="SpaceCapsTitle" id="article-title">{title.toUpperCase()}</p>
      <p>Posted by {author}</p>
      <p>{formatTimestamp(created_at).date}</p>
      <p>Votes: {votes}</p>
      <p>{comment_count} {comment_count === "1" ? "comment" : "comments"}<span className="fancyTopic fancyFont">{topic}</span></p>
    </Link>
  )
}

export default ArticleSummary
