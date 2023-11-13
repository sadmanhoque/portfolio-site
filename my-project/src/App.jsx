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
    "https://raw.githubusercontent.com/sadmanhoque/portfolio-site/edfa6bcd98b2949c0b5c674b67c368cd38975875/my-project/src/assets/terraform.svg"
  ];
  const contactsImageLink = [
    "https://raw.githubusercontent.com/sadmanhoque/portfolio-site/c1621b4ebd6a50aa5d46b2ef0c8a52becaeb2890/my-project/src/assets/github-mark.svg",
    "https://raw.githubusercontent.com/sadmanhoque/portfolio-site/c1621b4ebd6a50aa5d46b2ef0c8a52becaeb2890/my-project/src/assets/linkedin.svg",
    "https://github.com/sadmanhoque/portfolio-site/blob/main/my-project/src/assets/resume.png?raw=true",
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
    "https://www.researchgate.net/profile/Sadman-Sadi",
    "https://github.com/sadmanhoque/ECS-project"
  ]

  return (
    <>
      <div className=" h-[70vh] p-10 bg-[url('https://cdn.pixabay.com/photo/2019/12/17/17/58/night-4702174_1280.jpg')] items-center flex justify-center text-center text-highlightYellow text-5xl bg-no-repeat bg-cover">
        <h1 className="text-7xl ">Hello, my name is Sadman Sadi</h1>
      </div>

      <div className="h-max p-10 bg-darkestBlue items-center justify-center overflow-visible">
        <div className="grid lg:grid-cols-3 gap-6 group ">
          <WorkCards description={workRecords.DevOps} badges={workRecords.DevOpsBadges} header="DevOps" />
          <WorkCards description={workRecords.IoT} badges={workRecords.IoTBadges} header="IoT" />
          <WorkCards description={workRecords.BackEnd} badges={workRecords.BackEndBadges} header="BackEnd" />
        </div>
      </div>

      <div className="h-max p-[10vh] bg-darkestBlue items-center justify-center overflow-visible">
        <div className="grid lg:grid-cols-2 gap-6 group">
          <ProjectCards
            header={"Terraform"}
            stuff={projectRecords.Terraform[0]}
            hyperLink={projectLink[4]}
            imageLink={imageLink[4]}
          />
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

      <div className="h-max p-10 bg-darkestBlue flex flex-col items-center justify-left">
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