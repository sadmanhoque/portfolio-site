import React from "react";

interface Props {
  text: string;
}

function Paragraphs({ text }: Props) {
  return <div>{text}</div>;
}

export default Paragraphs;
