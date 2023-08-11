import "../App.css";
import React from "react";

interface Props {
  header: string;
  stuff: string;
  hyperLink: string;
  imageLink: string;
}

function ProjectCards({ header, stuff, hyperLink, imageLink }: Props) {
  return (
    <div className="bg-yellow-300 flex flex-col justify-between">
      <img src={imageLink} alt="test" className="max-h-20"/>
      <div className="p-2">
        <h2 className="text-xl font-bold">{header}</h2>
        <p>{stuff}</p>
        </div>

    </div>
  );
}

export default ProjectCards;