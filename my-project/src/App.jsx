//import React from 'react'
import "./App.css"
import WorkCards from "./components/WorkCards";
//import Navbar from "./components/Navbar";
import ProjectCards from "./components/ProjectCards";
import ContactCards from "./components/ContactCards"

import workRecords from "./text-files/workRecords.json";
import projectRecords from "./text-files/projectRecords.json";
function App() {
  //const navBarItems = ["Work", "Projects", "Contacts"];
  const imageLink = [
    "./src/assets/Google_Maps.svg",
    "./src/assets/data-analytics.svg",
    "./src/assets/robotics.svg",
    "./src/assets/research.svg",
  ];
  const contactsImageLink = [
    "./src/assets/github-mark.svg",
    "./src/assets/linkedin.svg"
  ]
  const contactsLink = [
    "https://github.com/sadmanhoque/",
    "https://www.linkedin.com/in/sadmanh/"
  ]
  const projectLink = [
    "https://github.com/sadmanhoque/restaurant-randomizer",
    "https://github.com/sadmanhoque/Selenium-NShousing",
    "https://www.youtube.com/watch?v=lLXjolcJ_E8",
    "https://www.researchgate.net/profile/Sadman-Sadi"
  ]

  return (
    <>
      <div className="h-[70vh] p-10 bg-darkestBlue flex items-center justify-center text-center text-highlightYellow text-5xl">
        <h1>Do I write my name here or something</h1>
      </div>
      <div className="h-[70vh] p-10 bg-darkestBlue flex flex-col items-center justify-center text-justify">
        <div className="grid lg:grid-cols-3 gap-6 group">
          <WorkCards description={workRecords.DevOps} badges={workRecords.DevOpsBadges} header="DevOps" />
          <WorkCards description={workRecords.IoT} badges={workRecords.IoTBadges} header="IoT" />
          <WorkCards description={workRecords.BackEnd} badges={workRecords.BackEndBadges} header="BackEnd" />
        </div>
      </div>
      <div className="h=[30vh] p-[10vh] bg-darkestBlue flex flex-col items-center justify-center text-justify">
        <div className="grid lg:grid-cols-2 gap-6 group">
          <ProjectCards
            header={"Google Maps Randomizer"}
            stuff={projectRecords.GoogleMapsRandomizer[0]}
            hyperLink={projectLink[0]}
            imageLink={imageLink[0]}
          />
          <ProjectCards
            stuff={projectRecords.DataAnalytics[0]}
            header={"Data Analytics"}
            hyperLink={projectLink[1]}
            imageLink={imageLink[1]}
          />

          <ProjectCards
            stuff={projectRecords.Electronics[0]}
            header={"Electronics"}
            hyperLink={projectLink[2]}
            imageLink={imageLink[2]}
          />

          <ProjectCards
            stuff={projectRecords.Research[0]}
            header={"Research"}
            hyperLink={projectLink[3]}
            imageLink={imageLink[3]}
          />
        </div>
      </div>
      <div className="h-[40vh] p-10 bg-darkestBlue flex flex-col items-center justify-center text-justify">
        <div className="grid lg:grid-cols-2 gap-6">
          <ContactCards contactImage={contactsImageLink[0]} contactsLink={contactsLink[0]} />
          <ContactCards contactImage={contactsImageLink[1]} contactsLink={contactsLink[1]} />
        </div>
      </div>

    </>
  );
}

export default App