//import { Link } from "react-router-dom";
import "../App.css";

interface Props {
  header: string;
  categories: string[];
}

function Cards({ categories, header }: Props) {
  let boxContent = [];

  return (
    <div>
      <h1>{header}</h1>
      {categories.map((category) => (
        <li className="card-header">
          <h1>{category}</h1>
        </li>
      ))}
    </div>
  );
}

export default Cards;
