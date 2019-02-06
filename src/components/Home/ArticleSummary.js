import React from 'react'
import { formatTimestamp } from '../../utils/API'
import { Link } from '@reach/router';

const ArticleSummary = ({ title, author, votes, created_at, id, topic }) => {
  return (
    <div className="ArticleSummaryItem">
      <Link className="SpaceCapsTitle" to={`/articles/${id}`}>{title.toUpperCase()}</Link>
      <p>Posted by {author}</p>
      <p>{formatTimestamp(created_at).date}</p>
      <p>Topic: {topic}</p>
      <p>Votes: {votes}</p>
    </div>
  )
}

export default ArticleSummary
