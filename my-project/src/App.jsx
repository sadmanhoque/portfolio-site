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
    "https://raw.githubusercontent.com/sadmanhoque/portfolio-site/a757d54363d0cc3b6905fbfaf0fe0c9231ce5faf/my-project/src/assets/Google_Maps.svg",
    "https://raw.githubusercontent.com/sadmanhoque/portfolio-site/a757d54363d0cc3b6905fbfaf0fe0c9231ce5faf/my-project/src/assets/data-analytics.svg",
    "https://raw.githubusercontent.com/sadmanhoque/portfolio-site/a757d54363d0cc3b6905fbfaf0fe0c9231ce5faf/my-project/src/assets/robotics.svg",
    "https://raw.githubusercontent.com/sadmanhoque/portfolio-site/a757d54363d0cc3b6905fbfaf0fe0c9231ce5faf/my-project/src/assets/research.svg",
  ];
  const contactsImageLink = [
    "https://raw.githubusercontent.com/sadmanhoque/portfolio-site/c1621b4ebd6a50aa5d46b2ef0c8a52becaeb2890/my-project/src/assets/github-mark.svg",
    "https://raw.githubusercontent.com/sadmanhoque/portfolio-site/c1621b4ebd6a50aa5d46b2ef0c8a52becaeb2890/my-project/src/assets/linkedin.svg",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn0.iconfinder.com%2Fdata%2Ficons%2Fbusiness-world-extras%2F512%2FBusinessmen_Resume-512.png&f=1&nofb=1&ipt=4b653ada24f6cd2f4339a3452f2e902b1a26fd66ea1d8679f5160884b2935c03&ipo=images"
  ]
  const contactsLink = [
    "https://github.com/sadmanhoque/",
    "https://www.linkedin.com/in/sadmanh/",
    "https://drive.google.com/file/d/1KLmlzQXcIHP4mN99qKcSpQJvOi1wr_6a/view?usp=sharing"
  ]
  const projectLink = [
    "https://github.com/sadmanhoque/restaurant-randomizer",
    "https://github.com/sadmanhoque/Selenium-NShousing",
    "https://www.youtube.com/watch?v=lLXjolcJ_E8",
    "https://www.researchgate.net/profile/Sadman-Sadi"
  ]

  return (
    <>
      <div className=" h-[70vh] p-10 bg-[url('https://cdn.pixabay.com/photo/2019/12/17/17/58/night-4702174_1280.jpg')] flex items-center justify-center text-center text-highlightYellow text-5xl bg-no-repeat bg-cover">
        <h1 className="text-7xl ">Hello, my name is Sadman Sadi</h1>
      </div>
      <div className=" h-[90vh] p-10 bg-darkestBlue flex flex-col items-center justify-center">
        <div className="grid lg:grid-cols-3 gap-6 group ">
          <WorkCards description={workRecords.DevOps} badges={workRecords.DevOpsBadges} header="DevOps" />
          <WorkCards description={workRecords.IoT} badges={workRecords.IoTBadges} header="IoT" />
          <WorkCards description={workRecords.BackEnd} badges={workRecords.BackEndBadges} header="BackEnd" />
        </div>
      </div>
      <div className="h=[30vh] p-[10vh] bg-darkestBlue flex flex-col items-center justify-center">
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
      <div className="h-[40vh] p-10 bg-darkestBlue flex flex-col items-center justify-left">
        <div className="grid lg:grid-cols-3 gap-6">
          <ContactCards contactImage={contactsImageLink[0]} contactsLink={contactsLink[0]} altName={"Github"} />
          <ContactCards contactImage={contactsImageLink[1]} contactsLink={contactsLink[1]} altName={"LinkedIn"} />
          <ContactCards contactImage={contactsImageLink[2]} contactsLink={contactsLink[2]} altName={"Resume"} />
        </div>
      </div>

    </>
  );
}

export default App