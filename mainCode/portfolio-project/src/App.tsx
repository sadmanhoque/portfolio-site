import "./App.css";

import Cards from "./components/Cards";
import Navbar from "./components/Navbar";
import BootstrapCards from "./components/BootstrapCards";

import wordRecords from "./text-files/workRecords.json";
import projectRecords from "./text-files/projectRecords.json";

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
  const imageLink = [
    "./src/assets/react.svg",
    "./src/assets/react.svg",
    "./src/assets/react.svg",
    "./src/assets/react.svg",
  ];

  return (
    <>
      <Navbar navBarItems={navBarItems} />
      <div style={header} className="bg-red-300">
        <h1>Hello, React App!</h1>
      </div>

      <main>
        <div className="content">
          <Cards categories={wordRecords.DevOps} header={"DevOps"} />
          <Cards categories={wordRecords.IoT} header={"IoT"} />
          <Cards categories={wordRecords.BackEnd} header={"BackEnd"} />
        </div>
        <div className="content">
          <div className="container">
            <div className="row">
              <div className="col-3">
                <BootstrapCards
                  header={"Google Maps Randomizer"}
                  stuff={projectRecords.GoogleMapsRandomizer[0]}
                  hyperLink={"google.com"}
                  imageLink={imageLink[0]}
                />
              </div>
              <div className="col-3">
                <BootstrapCards
                  stuff={projectRecords.DataAnalytics[0]}
                  header={"Data Analytics"}
                  hyperLink={"google.com"}
                  imageLink={imageLink[0]}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-3">
                <BootstrapCards
                  stuff={projectRecords.Electronics[0]}
                  header={"Electronics"}
                  hyperLink={"google.com"}
                  imageLink={imageLink[0]}
                />
              </div>
              <div className="col-3">
                <BootstrapCards
                  stuff={projectRecords.Research[0]}
                  header={"Research"}
                  hyperLink={"google.com"}
                  imageLink={imageLink[0]}
                />
              </div>
            </div>
          </div>
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
