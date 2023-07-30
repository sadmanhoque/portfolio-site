import React, { useEffect, useState } from "react";
import Paragraphs from "../components/Paragraphs";

function IoTPage() {
  const [paragraphText, setParagraphText] = useState("");

  useEffect(() => {
    fetch("src/text-files/paragraph.txt")
      .then((response) => response.text())
      .then((data) => setParagraphText(data));
  }, []);

  return (
    <div>
      <h1>This is a header</h1>
      <h2>Header level 2</h2>
      <Paragraphs text={paragraphText} />
      <h2>Second header level 2</h2>
    </div>
  );
}

export default IoTPage;