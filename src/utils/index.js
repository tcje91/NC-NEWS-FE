import axios from "axios";

const BASE_URL = "https://nc-news-tcje.herokuapp.com/api";

export const getArticles = async () => {
  const {
    data: { articles }
  } = await axios.get(`${BASE_URL}/articles`);
  return articles;
};

export const getTopArticles = async () => {
  const {
    data: { articles }
  } = await axios.get(`${BASE_URL}/articles?sort_by=votes&order=desc`);
  return articles;
};

export const formatTimestamp = timestamp => {
    const [date, time] = timestamp.slice(0, -5).split("T")
    const [year, month, day] = date.split("-");
    const months = ["Januray", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    return { date: `${months[Number(month)-1]} ${day} ${year}`, time }
};