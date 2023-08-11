import "../App.css";
import React from "react";

interface Props  {
  header: string;
  categories: string[];
}

function WorkCards({ header, categories}: Props) {
  return (
    <div className="p-4 bg-yellow-600 flex flex-col justify-between">
      <h1 className="text-xl font-bold">{header}</h1>
        <h4>{categories[0]}</h4>
      
    </div>
  );
}

export default WorkCards;
