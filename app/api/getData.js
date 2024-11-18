import axios from "axios";

const fetchNews = async ({
  endpoint = "top-headlines", // "top-headlines" o "everything"
  country = "us",
  category,
  query,
  pageSize = 10,
  page = 1,
}) => {
  const apiKey = "f65ddb0c5fb2432ab8bee4ed9f175c4c"; // Tu API Key
  const baseUrl = `https://newsapi.org/v2/${endpoint}`; // Determina el endpoint dinámicamente

  try {
    const response = await axios.get(baseUrl, {
      params: {
        country: endpoint === "top-headlines" ? country : undefined, // `country` solo aplica a `top-headlines`
        category: endpoint === "top-headlines" ? category : undefined, // `category` solo aplica a `top-headlines`
        q: query, // Aplica a ambos endpoints
        pageSize, // Número de resultados por página
        page, // Página actual
        apiKey, // Tu clave de API
      },
    });

    return response.data; // Retorna el objeto de respuesta completo
  } catch (error) {
    console.error("Error fetching news:", error.response || error.message);
    throw error; // Lanza el error para manejarlo en el componente que la use
  }
};

export default fetchNews;
