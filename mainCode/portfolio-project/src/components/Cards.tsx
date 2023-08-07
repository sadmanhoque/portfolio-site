import { Link } from "react-router-dom";
import "../App.css";

interface Props {
  categories: string[];
}

function Cards({ categories }: Props) {
  return (
    <div className="card-header">
      <h5 className="card-title">{categories} </h5>
    </div>
  );
}

export default Cards;
