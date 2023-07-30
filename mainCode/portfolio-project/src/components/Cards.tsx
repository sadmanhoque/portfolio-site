import { Link } from "react-router-dom";

interface Props {
  categories: string;
  text: string;
}

function Cards({ categories, text }: Props) {
  return (
    <Link to={"/" + categories}>
      <div className="card width: 18rem;">
        <img src="../assets/react.svg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{categories}</h5>
          <p className="card-text">{text}</p>
        </div>
      </div>
    </Link>
  );
}

export default Cards;
