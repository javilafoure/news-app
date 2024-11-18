import axios from 'axios';

const searchFetchNews = async (query, language = 'en', pageSize = 10, page = 1) => {
  const apiKey = "f65ddb0c5fb2432ab8bee4ed9f175c4c";  
  const baseUrl = "https://newsapi.org/v2/everything";

  try {
    const response = await axios.get(baseUrl, {
      params: {
        q: query,  
        pageSize: pageSize,  
        page: page,  
        language: language, 
        apiKey: apiKey,  
      },
    });

    return response.data;  
  } catch (error) {
    console.error('Error fetching news:', error.response || error.message);
    throw error;  
  }
};

export default searchFetchNews;
