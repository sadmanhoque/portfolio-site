import "../App.css";
import React from "react";

interface Props  {
  header: string;
  description: string[];
  badges: string[];
}

function WorkCards({ header, description, badges}: Props) {
  return (
    <div className="text-white p-4 max-w-xl flex flex-col justify-between hover:rounded-3xl group-hover:opacity-40 hover:!opacity-100 group">
      <div>
      <h1 className="text-xl font-bold group-hover:text-highlightYellow">{header}</h1>
        <h4>{description[0]}</h4>
      <div className="flex flex-wrap max-w-32 my-5">
        {badges.map((badge) => (
          <div key={badge} className="m-1 w-fit bg-medBlue text-darkestBlue font-semibold rounded-full p-1 text-sm">
            <span>
              {badge}
            </span>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}

export default WorkCards;
