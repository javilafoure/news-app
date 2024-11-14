import React from "react";
import Card from "./Card";

function Headlines() {
  return (
    <div className="flex flex-col gap-2 w-[80%]  md:w-[50%]">
      <h2 className="font-bold">Titulares</h2>
      <div className="flex justify-between">
        <Card />
        <Card />
        <div className="hidden md:block">
          <Card />
        </div>
        <div className="hidden md:block">
          <Card />
        </div>
      </div>
    </div>
  );
}

export default Headlines;
