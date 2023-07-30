interface Props {
  text: string;
}

function Paragraphs({ text }: Props) {
  return <div className="mx-3">{text}</div>;
}

export default Paragraphs;
