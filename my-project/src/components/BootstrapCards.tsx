import "../App.css";

interface Props {
  header: string;
  stuff: string;
  hyperLink: string;
  imageLink: string;
}

function BootstrapCards({ header, stuff, hyperLink, imageLink }: Props) {
  return (
    <div className="max-h-40 bg-yellow-300 flex flex-col justify-between">
      <img src={imageLink} alt="test" />
      <div className="p-2">
        <h2 className="font-semibold">{header}</h2>
        <p className="card-text">{stuff}</p>
        </div>

    </div>
  );
}

export default BootstrapCards;
