import "../App.css";
import React from "react";

interface Props  {
  header: string;
  categories: string[];
}

function Cards({ header, categories}: Props) {
  return (
    <div className="bg-blue">
      <h1>{header}</h1>
      {categories.map((category) => (
        <li key={category}>
          <h4>{category}</h4>
        </li>
      ))}
    </div>
  );
}

export default Cards;
