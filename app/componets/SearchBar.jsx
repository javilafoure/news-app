import React from "react";

function SearchBar() {
  return (
    <div className="dark:bg-slate-500 shadow-md shadow-slate-700 w-[70%] md:w-[30%] h-10 rounded-full flex items-center justify-between px-4 cursor-pointer">
      <input
        className="dark:bg-slate-500 justify-center focus:outline-none"
        placeholder="Buscar"
        type="text"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6 text-slate-700"
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
