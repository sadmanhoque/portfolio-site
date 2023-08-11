import "../App.css";
import React from "react";

interface Props  {
  header: string;
  categories: string[];
  badges: string[];
}

function WorkCards({ header, categories, badges}: Props) {
  return (
    <div className="p-4 bg-yellow-600 flex flex-col justify-between">
      <h1 className="text-xl font-bold">{header}</h1>
        <h4>{categories[0]}</h4>
      {console.log(badges)}
      <div className="w-fit box-content bg-indigo-900 text-indigo-200 font-bold rounded-full p-0.5">
        <span>
          badges
          
        </span>
      </div>
      
    </div>
  );
}

export default WorkCards;
