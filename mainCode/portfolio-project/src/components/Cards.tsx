import { Link } from "react-router-dom";
import "../scss/custom.scss";

interface Props {
  categories: string;
}

function Cards({ categories }: Props) {
  return (
    <Link to={"/" + categories}>
      <div
        className="card width: 18rem;"
        style={{ backgroundColor: "var(--card-color)" }}
      >
        <img src="src/assets/react.svg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title" style={{ color: "var(--text-color)" }}>
            {categories}{" "}
          </h5>
        </div>
      </div>
    </Link>
  );
}

export default Cards;
