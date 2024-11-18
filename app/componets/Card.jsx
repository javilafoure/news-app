"use client";

import React from "react";

function Card({ image, title, description, url }) {
  const handleClick = () => {
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div
      className="cursor-pointer rounded-lg shadow-md overflow-hidden bg-white dark:bg-gray-800 md:hover:shadow-xl md:hover:scale-105 md:transform transition-all duration-300"
      onClick={handleClick}
    >
      {image && (
        <img src={image} alt={title} className="w-full h-40 object-cover" />
      )}
      <div className="p-4">
        <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">
          {title}
        </h3>
        <p className="text-gray-700 dark:text-gray-400 text-sm">
          {description}
        </p>
      </div>
    </div>
  );
}

export default Card;
