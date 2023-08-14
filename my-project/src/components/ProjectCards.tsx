import "../App.css";
import React from "react";

interface Props {
  header: string;
  stuff: string;
  hyperLink: string;
  imageLink: string;
  altName: string;
}

function ProjectCards({ header, stuff, hyperLink, imageLink, altName }: Props) {
  return (
    <div className="p-20 text-white flex flex-col justify-between group-hover:opacity-40 hover:!opacity-100">
      <img src={imageLink} alt={altName} className="max-h-20"/>
      <div className="p-2">
        <h2 className="text-xl font-bold">{header}</h2>
        <p>{stuff}</p>
        <a className="hover:text-highlightYellow" href={hyperLink} target="_blank" rel="noopener noreferrer">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
        </svg>

        </a>
      </div>

    </div>
  );
}

export default ProjectCards;


