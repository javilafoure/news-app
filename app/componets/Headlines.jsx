"use client";
import React, { useEffect, useState } from "react";
import Card from "./Card";
import fetchNews from "../api/getData";

function Headlines() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getNews = async () => {
      try {
        const data = await fetchNews({
          endpoint: "top-headlines",
          country: "us",
          pageSize: 3,
        });
        setArticles(data.articles);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    getNews();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="flex flex-col gap-2 w-[80%] md:w-[70%]">
      <h2 className="font-bold">Titulares</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {articles.map((article, index) => (
          <Card
            key={index}
            image={article.urlToImage}
            title={article.title}
            description={article.description}
            url={article.url}
          />
        ))}
      </div>
    </div>
  );
}

export default Headlines;
