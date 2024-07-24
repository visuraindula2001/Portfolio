import React from "react";
import "./skills.css";
import FrontDesign from "../../assets/ui-design.png";
import BackDesign from "../../assets/app-design.png";


const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I do</span>
      <span className="skillDesc">
      I am a skilled and passionate web designer with extensive experience in creating visually appealing and user-friendly websites. My expertise lies in crafting seamless user interfaces and engaging user experiences using various design tools and technologies. I have a strong foundation in web design principles and a keen eye for detail, which enables me to transform complex ideas into intuitive and aesthetically pleasing designs
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={FrontDesign} className="skillBarImg"></img>
          <div className="skillBarText">
            <h2>Front-End Developer</h2>
            <p>HTML, CSS, JavaScript, React</p>
          </div>
        </div>

        <div className="skillBar">
          <img src={BackDesign} className="skillBarImg"></img>
          <div className="skillBarText">
            <h2>Back-End Developer</h2>
            <p>Node.js, PHP, MongoDB</p>
          </div>
        </div>        
      </div>
    </section>
  );
};

export default Skills;
