import "../App.css";

interface Props {
  header: string;
  stuff: string;
  hyperLink: string;
  imageLink: string;
}

function BootstrapCards({ header, stuff, hyperLink, imageLink }: Props) {
  return (
    <div className="card">
      <img src={imageLink} className="card-img-top" alt="test" />
      <div className="card-body">
        <h5 className="card-title">{header}</h5>
        <p className="card-text">{stuff}</p>
      </div>
    </div>
  );
}

export default BootstrapCards;
