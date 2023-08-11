//import React from 'react'
import "./App.css"
import WorkCards from "./components/WorkCards";
//import Navbar from "./components/Navbar";
import ProjectCards from "./components/ProjectCards";
import ContactCards from "./components/ContactCard"

import workRecords from "./text-files/workRecords.json";
import projectRecords from "./text-files/projectRecords.json";
function App() {
  const navBarItems = ["Work", "Projects", "Contacts"];
  const imageLink = [
    "./src/assets/Google_Maps.svg",
    "./src/assets/react.svg",
    "./src/assets/react.svg",
    "./src/assets/react.svg",
  ];

  return (
    <>
      <div className="h-96 p-10 bg-gray-900 flex items-center justify-center text-center text-blue-500 text-5xl">
        <h1>Hello, React App</h1>
      </div>
      <div className="p-10 bg-blue-800 flex flex-col items-center justify-center text-justify">
        <div className="grid lg:grid-cols-3 gap-6">
          <WorkCards categories={workRecords.DevOps} badges={workRecords.DevOpsBadges} header="DevOps" />
          <WorkCards categories={workRecords.IoT} badges={workRecords.IoTBadges} header="IoT" />
          <WorkCards categories={workRecords.BackEnd} badges={workRecords.BackEndBadges} header="BackEnd" />
        </div>
      </div>
      <div className="p-10 bg-green-900 flex flex-col items-center justify-center text-justify">
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
        <ContactCards categories={navBarItems} header={"temp"} />
        <ContactCards categories={navBarItems} header={"temp"} />
        <ContactCards categories={navBarItems} header={"temp"} />
      </div>

    </>
  );
}

export default App