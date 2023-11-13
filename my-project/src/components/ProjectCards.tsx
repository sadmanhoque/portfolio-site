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
    <div className="p-10 text-white flex flex-col justify-between group-hover:opacity-40 hover:!opacity-100 group">
      <img src={imageLink} alt={altName} className="max-h-20"/>
      <div className="p-2">
        <h2 className="text-xl font-bold group-hover:text-highlightYellow">{header}</h2>
        <p>{stuff}</p>
        <a className="group-hover:text-highlightYellow group-hover:animate-pulse" href={hyperLink} target="_blank" rel="noopener noreferrer">
          check it out &rarr;
        </a>
      </div>

    </div>
  );
}

export default ProjectCards;


