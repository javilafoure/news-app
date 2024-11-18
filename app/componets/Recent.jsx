"use client";

import React, { useEffect, useState } from "react";
import Card from "./Card";
import fetchRecentNews from "../api/getRecent";

function Recent() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getRecentNews = async () => {
      try {
        const data = await fetchRecentNews({
          query: "latest",
          pageSize: 4,
        });
        setArticles(data.articles);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    getRecentNews();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="flex flex-col gap-2 w-[80%] md:w-[70%]">
      <h2 className="font-bold">Recientes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 place-items-center py-2 md:py-4 rounded-lg">
        {articles.map((article, index) => (
          <Card
            key={index}
            image={article.urlToImage}
            title={article.title}
            description={article.description}
            url={article.url}
            className="h-full"
          />
        ))}
      </div>
    </div>
  );
}

export default Recent;
