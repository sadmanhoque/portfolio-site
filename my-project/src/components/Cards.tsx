import "../App.css";
import React from "react";

interface Props  {
  header: string;
  categories: string[];
}

function Cards({ header, categories}: Props) {
  return (
    <div className="bg-yellow-600 m-1">
      <h1 className="text-xl font-bold">{header}</h1>
      <p>
      {categories.map((category) => (
        <li key={category}>
          <h4>{category}</h4>
        </li>
      ))}
      </p>
    </div>
  );
}

export default Cards;
