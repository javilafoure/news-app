"use client";

import React from "react";
import { useRouter } from "next/navigation";

function SearchBar() {
  const router = useRouter();

  const handleFilterClick = () => {
    router.push("/searchPage");
  };

  return (
    <div className="flex items-center gap-3">
      <button
        onClick={handleFilterClick}
        className="px-4 py-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
      >
        Filtrar
      </button>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
        />
      </svg>
    </div>
  );
}

export default SearchBar;
