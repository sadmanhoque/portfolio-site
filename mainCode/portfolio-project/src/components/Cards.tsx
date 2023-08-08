//import { Link } from "react-router-dom";
import "../App.css";

interface Props {
  header: string;
  categories: string[];
}

function Cards({ categories, header }: Props) {
  return (
    <div className="card-header">
      <h1>{header}</h1>
      {categories.map((category) => (
        <li>
          <h4>{category}</h4>
        </li>
      ))}
    </div>
  );
}

export default Cards;
