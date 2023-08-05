import Paragraphs from "../components/Paragraphs";
import Navbar from "../components/Navbar";
import jsonData from "/src/text-files/BackEnd.json";

function BackEndpage() {
  return (
    <>
      <div style={{ backgroundColor: "var(--secondary-background-color)" }}>
        <Navbar />
        <div>
          <h2 className="text-center">{jsonData[0].title}</h2>
          <Paragraphs text={jsonData[0].contentBackground} />
          <Paragraphs text={jsonData[0].contentPointOne} />
        </div>
        <div>
          <h2 className="text-center">{jsonData[1].title}</h2>
          <Paragraphs text={jsonData[1].contentBackground} />
          <Paragraphs text={jsonData[1].contentPointOne} />
        </div>
      </div>
    </>
  );
}

export default BackEndpage;
