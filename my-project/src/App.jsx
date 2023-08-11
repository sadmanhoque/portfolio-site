//import React from 'react'
import "./App.css"
import Cards from "./components/Cards";
//import Navbar from "./components/Navbar";
import ProjectCards from "./components/ProjectCards";

import wordRecords from "./text-files/workRecords.json";
import projectRecords from "./text-files/projectRecords.json";
function App() {
  const navBarItems = ["Work", "Projects", "Contacts"];
  /*const categoryItems = [
    { section: "Work", contents: ["DevOps", "BackEnd", "IoT"] },
    { section: "Projects", contents: ["one", "two", "three"] },
    { section: "Contacts", contents: ["aa", "bb", "cc"] },
  ];*/
  const imageLink = [
    "./src/assets/Google_Maps.svg",
    "./src/assets/react.svg",
    "./src/assets/react.svg",
    "./src/assets/react.svg",
  ];

  return (
    <>
      <div className="p- bg-gray-900 flex items-center justify-center text-center text-blue-500 text-5xl">
        <h1>Hello, React App</h1>
      </div>

      <div className="p-10 bg-blue-800 flex items-center justify-center text-center">
        <Cards categories={wordRecords.DevOps} header="DevOps" />
        <Cards categories={wordRecords.IoT} header="IoT" />
        <Cards categories={wordRecords.BackEnd} header="BackEnd" />
      </div>
      <div className="p-10 bg-green-900 flex flex-col items-center justify-center text-center">
        <div className="grid lg:grid-cols-2 gap-6">
          <ProjectCards
            header={"Google Maps Randomizer"}
            stuff={projectRecords.GoogleMapsRandomizer[0]}
            hyperLink={"google.com"}
            imageLink={imageLink[0]}
          />

          <ProjectCards
            stuff={projectRecords.DataAnalytics[0]}
            header={"Data Analytics"}
            hyperLink={"google.com"}
            imageLink={imageLink[0]}
          />

          <ProjectCards
            stuff={projectRecords.Electronics[0]}
            header={"Electronics"}
            hyperLink={"google.com"}
            imageLink={imageLink[0]}
          />

          <ProjectCards
            stuff={projectRecords.Research[0]}
            header={"Research"}
            hyperLink={"google.com"}
            imageLink={imageLink[0]}
          />
        </div>
      </div>
      <div className="h-96 bg-blue-900 flex items-center justify-center text-center">
        <Cards categories={navBarItems} header={"temp"} />
        <Cards categories={navBarItems} header={"temp"} />
        <Cards categories={navBarItems} header={"temp"} />
      </div>

    </>
  );
}

export default App