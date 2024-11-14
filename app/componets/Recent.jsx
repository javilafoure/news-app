import React from "react";
import Card from "./Card";

function Recent() {
  return (
    <div className="flex flex-col gap-2 w-[80%] md:w-[50%]">
      <h2 className="font-bold">Recientes</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 place-items-center bg-slate-500 py-2 md:py-4 rounded-lg">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Recent;
