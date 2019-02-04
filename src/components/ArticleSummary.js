import React from 'react'
import { formatTimestamp } from '../utils'
import { Link } from '@reach/router';

const ArticleSummary = ({ title, author, votes, created_at, id }) => {
  return (
    <div className="ArticleSummaryItem">
      <Link className="SpaceCapsTitle" to={`/articles/${id}`}>{title.toUpperCase()}</Link>
      <p>Posted by {author}, {formatTimestamp(created_at).date}</p>
      <p>Votes: {votes}</p>
    </div>
  )
}

export default ArticleSummary
