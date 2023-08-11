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
      <div className="flex flex-wrap max-w-32">
        {badges.map((badge) => (
          <div key={badge} className="m-0.5 w-fit bg-indigo-900 text-indigo-200 font-bold rounded-full p-0.5">
            <span>
              {badge}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WorkCards;
