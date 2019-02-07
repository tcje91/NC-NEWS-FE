import React from 'react'
import ArticleSummary from './ArticleSummary';

const ArtSumDisplay = ({ articles, label }) => {
  return (
    <div>
      <h3>{label}</h3>
      {articles.map(article => {
            return <ArticleSummary key={article.article_id} title={article.title} author={article.author} votes={article.votes} created_at={article.created_at} id={article.article_id} topic={article.topic} comment_count={article.comment_count}/>
        })}
    </div>
  )
}

export default ArtSumDisplay

