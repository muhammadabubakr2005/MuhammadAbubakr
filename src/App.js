
import "./App.css";

import ParticleConfig from "./particleConfig.js";
import HomeBanner from "./components/HomeBanner.js";
import Navbar from "./components/Navbar.js";
import ProjectCard from "./components/ProjectCard.js";
import AboutMe from "./components/AboutMe.js";
import ContactForm from "./components/ContactForm.js";
import SkillCard from "./components/SkillCard.js";
import Footer_ from "./components/Footer.js";
// import CoalGame from "./assets/coalGame.mp4";
// import WebApp from "./assets/ArtGallery.mp4";
// import MedPro from "./assets/MedPro.mp4";
// import VPL from "./assets/VPL.mp4";

const App = () => {
  
  return (
    <div>
      <ParticleConfig />
      <div className="screen">
    
        <Navbar />
        <HomeBanner id="home" />
         <ProjectCard
          id="project"
          projectTitle="Online Art Gallery"
          projectDesc="A web application for art lovers to explore. The application is developed using ReactJS and NodeJS. The application is integrated with MS-SQL for database management. This App contains a lot of features such as chatbox, notifications, upload and explore arts etc."
          projectLink="https://github.com/DevanshSahni/Wiggles"
          projectImg="https://www.youtube.com/watch?v=Bef_TvO6soY"
        />

        <ProjectCard
          id="project"
          className="odd"
          projectTitle="CatchAlpha Game"
          projectDesc="A console based Game developed in Assemly Language 8088 archeitecture. The game is based on the concept of catching the alphabets falling."
          projectLink="https://github.com/DevanshSahni/Wiggles"
          projectImg="https://www.youtube.com/watch?v=OQdDGQIm7YE"
        />

        <ProjectCard
          id="project"
          projectTitle="MedPro - Medical Store App"
          projectDesc="It is an E-commerce Mobile Application for medical store. The application is developed using React Native and NodeJS. The application is integrated with MongoDB for database management. This App contains a lot of features such as Login/Signup, medicine descriptions, cart, notifications, orders placing, order tracking."
          projectLink="https://github.com/DevanshSahni/Wiggles"
          projectImg="https://www.youtube.com/watch?v=4598bp6CZog"
        />

        <ProjectCard
          id="project"
          className="odd"
          projectTitle="VPL - Visual Programming Language"
          projectDesc="A Visual Programming Language extension developed in React. It is used to convert visual components to HTML code. The language is based on the concept of drag and drop. This App contains a lot of features such as drag and drop, code generation, execution, etc."
          projectLink="https://github.com/DevanshSahni/Wiggles"
          projectImg="https://www.youtube.com/watch?v=fJI9KI831IY"
        />

        <AboutMe id="about" />
        <SkillCard id="skills" />
        <ContactForm id="contact" />
        <Footer_ />
        
      </div>
    </div>
  );
};

export default App;



