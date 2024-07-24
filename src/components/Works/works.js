import React from "react";
import "./works.css";
import project1 from "../../assets/portfolio-1.png";
import project2 from "../../assets/portfolio-2.png";
import project3 from "../../assets/portfolio-3.png";

const Works = () => {
  return (
    <section id="works">
      <h2 className="worksTitle">My Projects</h2>
      <span className="worksDesc">
      I have worked on a diverse range of projects that showcase my skills in both web design and development. Here are some highlights:
      </span>
      <div className="worksImgs">
        <a href="https://github.com/visuraindula2001/fitness-equipment-store" target="_blank">
          <img src={project1} className="worksImg"></img>
        </a>
        <a href="https://github.com/visuraindula2001/Stationary-Store" target="_blank">
        <img src={project2} className="worksImg"></img>
        </a>
        <a href="https://github.com/itzzjb/springboot-ecommerce-backend" target="_blank" >
        <img src={project3} className="worksImg"></img>
        </a>
      </div>
    </section>
  );
};

export default Works;
