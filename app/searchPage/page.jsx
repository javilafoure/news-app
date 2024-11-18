"use client";
import BtnDark from "../componets/BtnDark";
import React, { useState } from "react";
import Card from "../componets/Card";
import searchFetchNews from "../api/searchFetchNews";

function SearchPage() {
  const [query, setQuery] = useState("");
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query) return;

    setLoading(true);
    setError(null);

    try {
      const data = await searchFetchNews(query, 5);
      setArticles(data.articles);
    } catch (err) {
      setError("Error fetching news");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-4 w-[80%] md:w-[60%] mx-auto my-6">
      <h1 className="font-bold text-2xl">Busqueda de noticias</h1>
      <div className="absolute top-0 right-0 p-5">
        <BtnDark />
      </div>
      <form onSubmit={handleSearch} className="flex gap-2 mb-4">
        <input
          type="text"
          className="w-full px-4 dark:text-black py-2 border rounded-md shadow-md focus:outline-none"
          placeholder="Buscar"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          Buscar
        </button>
      </form>

      {loading && <p>Loading...</p>}

      {/* Mensaje de error */}
      {error && <p className="text-red-500">{error}</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {articles.length > 0 ? (
          articles.map((article, index) => (
            <Card
              key={index}
              image={article.urlToImage}
              title={article.title}
              description={article.description}
              url={article.url}
            />
          ))
        ) : (
          <p>No hay resultados por ahora</p>
        )}
      </div>
    </div>
  );
}

export default SearchPage;
