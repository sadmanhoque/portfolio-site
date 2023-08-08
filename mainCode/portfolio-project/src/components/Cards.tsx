//import { Link } from "react-router-dom";
import "../App.css";
import cardContents from "../text-files/workRecords.json";

interface Props {
  categories: string[];
}

function Cards({ categories }: Props) {
  return (
    <div>
      <ul>
        {categories.map((item: string) => (
          <li className="card-header">
            <h1>{item}</h1>
            <ul>
              {cardContents.map((itemContent) => (
                <li>
                  <h4>{itemContent.DevOps}</h4>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cards;
