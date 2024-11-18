import axios from "axios";

const fetchRecentNews = async ({ query, pageSize = 10, page = 1 }) => {
  const apiKey = "f65ddb0c5fb2432ab8bee4ed9f175c4c"; // Tu API Key
  const baseUrl = "https://newsapi.org/v2/everything";

  // Obtener la fecha de hoy en formato "YYYY-MM-DD"
  const today = new Date().toISOString().split("T")[0];

  // Calcular la fecha de hace 7 días
  const lastWeek = new Date();
  lastWeek.setDate(lastWeek.getDate() - 7);
  const lastWeekDate = lastWeek.toISOString().split("T")[0];

  try {
    const response = await axios.get(baseUrl, {
      params: {
        q: query || "breaking news", // Palabra clave de búsqueda
        from: lastWeekDate, // Fecha de inicio (7 días atrás)
        to: today, // Fecha de fin (hoy)
        sortBy: "publishedAt", // Ordenar por fecha de publicación
        pageSize,
        page,
        apiKey,
      },
    });

    return response.data; // Retorna los datos obtenidos
  } catch (error) {
    console.error("Error fetching recent news:", error.response || error.message);
    throw error;
  }
};

export default fetchRecentNews;
