import React from "react";

const ArticleBody = ({ article }) => {
  const { title, body, topic } = article;
  return (
    <div className="ArticleBody">
      <h3>{title ? title.toUpperCase() : ""}</h3>
      <p className="BodyText">{body}</p>
      <p className="fancyTopic fancyFont inBodyTopic">{topic}</p>
    </div>
  );
};

export default ArticleBody;
