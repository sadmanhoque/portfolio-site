import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Buttons from "./components/Buttons";
import DismissingAlerts from "./components/DismissingAlerts";
import { useState } from "react";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  let items = ["New York", "San Fran", "Tokyo", "London"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <>
      <div>
        <ListGroup
          items={items}
          heading="Cities"
          onSelectItem={handleSelectItem}
        />
        {alertVisible && (
          <DismissingAlerts onClose={() => setAlertVisibility(false)}>
            Hello World
          </DismissingAlerts>
        )}
        <Buttons onClick={() => console.log("Clicked")}>My Button</Buttons>
        <Buttons onClick={() => setAlertVisibility(true)}>Alert Button</Buttons>
      </div>
    </>
  );
}

export default App;
