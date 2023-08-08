import "./App.css";
import Cards from "./components/Cards";
import Navbar from "./components/Navbar";
import wordRecords from "./text-files/workRecords.json";

function App() {
  const header = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "50vh",
  };
  const workItems = ["DevOps", "BackEnd", "IoT"];
  const navBarItems = ["Work", "Projects", "Contacts"];
  const categoryItems = [
    { section: "Work", contents: ["DevOps", "BackEnd", "IoT"] },
    { section: "Projects", contents: ["one", "two", "three"] },
    { section: "Contacts", contents: ["aa", "bb", "cc"] },
  ];

  return (
    <>
      <Navbar navBarItems={navBarItems} />
      <div style={header}>
        <h1>Hello, React App!</h1>
      </div>

      <main>
        <div className="content">
          <Cards categories={wordRecords.DevOps} header={"DevOps"} />
          <Cards categories={wordRecords.IoT} header={"IoT"} />
          <Cards categories={wordRecords.BackEnd} header={"BackEnd"} />
        </div>
        <div className="content">
          <Cards categories={navBarItems} header={"temp"} />
          <Cards categories={navBarItems} header={"temp"} />
          <Cards categories={navBarItems} header={"temp"} />
        </div>
        <div className="content">
          <Cards categories={navBarItems} header={"temp"} />
          <Cards categories={navBarItems} header={"temp"} />
          <Cards categories={navBarItems} header={"temp"} />
        </div>
      </main>
    </>
  );
}

export default App;
