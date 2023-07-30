import { Link } from "react-router-dom";

interface Props {
  categories: string;
}

function Cards({ categories }: Props) {
  return (
    <Link to={"/" + categories}>
      <div className="card width: 18rem;">
        <img src="src/assets/react.svg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{categories}</h5>
        </div>
      </div>
    </Link>
  );
}

export default Cards;
