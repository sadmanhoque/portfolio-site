import { useEffect, useState } from "react";
import Paragraphs from "../components/Paragraphs";
import Navbar from "../components/Navbar";
import jsonData from "/src/text-files/IoT-Perennia-background.json";

function IoTPage() {
  const [paragraphText, setParagraphText] = useState("");

  useEffect(() => {
    fetch("src/text-files/IoT-Perennia-background.json")
      .then((response) => response.text())
      .then((data) => setParagraphText(data));
  }, []);

  return (
    <>
      <div>
        <Navbar />
        <h2 className="text-center">IoT Developer at Perennia</h2>
        <Paragraphs text={jsonData[0].contentBackground} />
        <Paragraphs text={jsonData[0].contentPointOne} />
      </div>
    </>
  );
}

export default IoTPage;
