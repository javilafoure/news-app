import axios from "axios";

const fetchRecentNews = async ({ query, pageSize = 10, page = 1 }) => {
  const apiKey = "f65ddb0c5fb2432ab8bee4ed9f175c4c";
  const baseUrl = "https://newsapi.org/v2/everything";

  
  const today = new Date().toISOString().split("T")[0];

 
  const lastWeek = new Date();
  lastWeek.setDate(lastWeek.getDate() - 7);
  const lastWeekDate = lastWeek.toISOString().split("T")[0];

  try {
    const response = await axios.get(baseUrl, {
      params: {
        q: query || "breaking news", 
        from: lastWeekDate, 
        to: today, 
        sortBy: "publishedAt", 
        pageSize,
        page,
        apiKey,
      },
    });

    return response.data; 
  } catch (error) {
    console.error("Error fetching recent news:", error.response || error.message);
    throw error;
  }
};

export default fetchRecentNews;
