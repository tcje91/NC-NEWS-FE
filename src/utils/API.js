import axios from "axios";

const BASE_URL = "https://nc-news-tcje.herokuapp.com/api";

export const getArticles = () => {
  return axios
    .get(`${BASE_URL}/articles`)
    .then(({ data: { articles } }) => articles)
    .catch(console.log);
};

export const getTopArticles = () => {
  return axios
    .get(`${BASE_URL}/articles?sort_by=votes&order=desc`)
    .then(({ data: { articles } }) => articles);
};

export const getArticleById = id => {
  return axios
    .get(`${BASE_URL}/articles/${id}`)
    .then(({ data: { article } }) => article)
    .catch(console.log);
};

export const getUsers = () => {
  return axios
    .get(`${BASE_URL}/users`)
    .then(({ data: { users } }) => users)
    .catch(console.log);
};

export const getUserByUsername = username => {
  return axios
    .get(`${BASE_URL}/users/${username}`)
    .then(({ data: { user } }) => user);
};

export const getCommentsByArticle = article_id => {
  return axios
    .get(`${BASE_URL}/articles/${article_id}/comments`)
    .then(({ data: { comments } }) => comments);
};

export const voteOnArticle = (voteChange, article_id) => {
  return axios({
    method: "patch",
    url: `${BASE_URL}/articles/${article_id}`,
    data: { inc_votes: voteChange }
  }).then(console.log)
}

export const voteOnComment = (voteChange, article_id, comment_id) => {
  return axios({
    method: "patch",
    url: `${BASE_URL}/articles/${article_id}/comments/${comment_id}`,
    data: { inc_votes: voteChange }
  }).then(console.log)
}

export const formatTimestamp = timestamp => {
  const [date, time] = timestamp.slice(0, -5).split("T");
  const [year, month, day] = date.split("-");
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  return { date: `${months[Number(month) - 1]} ${day} ${year}`, time };
};
