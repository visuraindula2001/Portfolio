import React from "react";
import './navbar.css';
import logo from "../../assets/logo.png";
import contactImg from "../../assets/contact.png"
import { Link } from 'react-scroll'


const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className="logo"></img>
      <div className="dekstopMenu">
        <Link activeClass="active" to='intro' spy={true} smooth={true}  offset={-50} duration={500} className="dekstopMenuListItem">Home</Link>
        <Link activeClass="active" to='skills' spy={true} smooth={true}  offset={-50} duration={500} className="dekstopMenuListItem">About</Link>
        <Link activeClass="active" to='works' spy={true} smooth={true}  offset={-50} duration={500} className="dekstopMenuListItem">Projects</Link>
        <Link activeClass="active" to='contact' spy={true} smooth={true}  offset={-70} duration={500} className="dekstopMenuListItem">Contact</Link>
      </div>
      <button className="dekstopMenuBtn" onClick={() =>{
        document.getElementById('contact').scrollIntoView({behavior:'smooth'});
      }}>
        <img src={contactImg} className="dekstopMenuImg" />
        Contact Me
      </button>
    </nav>
  );
};

export default Navbar;
