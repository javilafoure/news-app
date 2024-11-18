import axios from "axios";

const fetchNews = async ({
  endpoint = "top-headlines",
  country = "us",
  category,
  query,
  pageSize = 10,
  page = 1,
}) => {
  const apiKey = "f65ddb0c5fb2432ab8bee4ed9f175c4c"; 
  const baseUrl = `https://newsapi.org/v2/${endpoint}`;

  try {
    const response = await axios.get(baseUrl, {
      params: {
        country: endpoint === "top-headlines" ? country : undefined, 
        category: endpoint === "top-headlines" ? category : undefined, 
        q: query, 
        pageSize, 
        page, 
        apiKey, 
      },
    });

    return response.data; 
  } catch (error) {
    console.error("Error fetching news:", error.response || error.message);
    throw error; 
  }
};

export default fetchNews;
