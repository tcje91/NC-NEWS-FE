import React from "react";

const ArticleBody = ({ article }) => {
  const { title, body } = article;
  return (
    <div className="ArticleBody">
      <h3>{title ? title.toUpperCase() : ""}</h3>
      <p className="BodyText">{body}</p>
    </div>
  );
};

export default ArticleBody;
