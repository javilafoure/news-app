"use client";

import BtnDark from "../componets/BtnDark";
import React, { useState, useEffect } from "react";
import Card from "../componets/Card";
import searchFetchNews from "../api/searchFetchNews";
import axios from "axios";

function SearchPage() {
  const [query, setQuery] = useState("");
  const [language, setLanguage] = useState("en");
  const [sources, setSources] = useState("");
  const [sourcesList, setSourcesList] = useState([]);
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [debouncedQuery, setDebouncedQuery] = useState("");

  useEffect(() => {
    const fetchSources = async () => {
      try {
        const response = await axios.get("https://newsapi.org/v2/sources", {
          params: {
            apiKey: "f65ddb0c5fb2432ab8bee4ed9f175c4c",
          },
        });
        setSourcesList(response.data.sources);
      } catch (err) {
        console.error("Error fetching sources:", err);
      }
    };

    fetchSources();
  }, []);

  // Debounce para la búsqueda
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(query);
    }, 500); // Espera de 500 ms para reducir peticiones innecesarias

    return () => {
      clearTimeout(handler);
    };
  }, [query]);

  // Realiza la búsqueda cuando `debouncedQuery` cambia y tiene al menos 3 caracteres
  useEffect(() => {
    const fetchArticles = async () => {
      if (debouncedQuery.length < 3) {
        setArticles([]);
        return;
      }

      setLoading(true);
      setError(null);

      try {
        const data = await searchFetchNews(
          debouncedQuery,
          language,
          sources,
          5
        );
        setArticles(data.articles);
      } catch (err) {
        setError("Error fetching news");
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, [debouncedQuery, language, sources]);

  return (
    <div className="flex flex-col gap-4 w-[80%] md:w-[60%] mx-auto my-6">
      <h1 className="font-bold text-2xl">Búsqueda de noticias</h1>
      <div className="absolute top-0 right-0 p-5">
        <BtnDark />
      </div>

      <form className="flex gap-2 mb-4">
        <input
          type="text"
          className="w-full px-4 dark:text-black py-2 border rounded-md shadow-md focus:outline-none"
          placeholder="Buscar"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>

      <div className="mb-4">
        <label className="mr-2" htmlFor="language-select">
          Idioma:
        </label>
        <select
          id="language-select"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="px-4 py-2 border rounded-md shadow-md dark:text-black"
        >
          <option value="en">Inglés</option>
          <option value="es">Español</option>
          <option value="fr">Francés</option>
          <option value="de">Alemán</option>
          <option value="it">Italiano</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="mr-2" htmlFor="sources-select">
          Fuente:
        </label>
        <select
          id="sources-select"
          value={sources}
          onChange={(e) => setSources(e.target.value)}
          className="px-4 py-2 border rounded-md shadow-md dark:text-black"
        >
          <option value="">Todas las fuentes</option>
          {sourcesList.map((source) => (
            <option key={source.id} value={source.id}>
              {source.name}
            </option>
          ))}
        </select>
      </div>

      {loading && <p>Loading...</p>}

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
