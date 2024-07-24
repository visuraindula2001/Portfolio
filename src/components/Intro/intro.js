import React from "react";
import "./intro.css";
import bg from "../../assets/image.png";
import btnImg from "../../assets/hireme.png";
import { Link } from "react-scroll";

function Intro() {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm <span className="introName">Visura</span>
          <br />
          Web Developer
        </span>
        <p className="introPara">As a Software Engineering undergraduate, <br/>I am passionate about seeking new opportunities and the adventures.</p>
        <Link>

        </Link>
      </div>
      <img src={bg} className="bg"></img>
    </section>
  );
}

export default Intro;
