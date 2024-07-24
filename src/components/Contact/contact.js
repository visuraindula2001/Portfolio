import React, { useRef } from "react";
import "./contact.css";
import FacebookIcon from "../../assets/facebook-icon.png";
import TwitterIcon from "../../assets/twitter.png";
import LinkedInIcon from "../../assets/LinkedIn-icon.png";
import GithubIcon from "../../assets/github.png";

import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vyefvdk",
        "template_u8comej",
        form.current,
        "9VDyKe2J1CFvpYYH8"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert("Email Sent!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contactPage">
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">
          Please fill out thr form below to discuss any work opportunities .
        </span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className="name"
            placeholder="Your Name"
            name="your_name"
          ></input>
          <input
            type="email"
            className="email"
            placeholder="Your Email"
            name="your_email"
          ></input>
          <textarea
            className="msg"
            name="message"
            rows="5"
            placeholder="Your Message"
          ></textarea>
          <button type="submit" value="Send" className="submitBtn">
            Submit
          </button>
          <div className="links">
            
            <a href="https://web.facebook.com/visura.indula" target="_blank">
            <img src={FacebookIcon} className="link"></img>
            </a>

            <a href="https://x.com/home" target="_blank">
            <img src={TwitterIcon} className="link"></img>
            </a>

            <a href="https://www.linkedin.com/in/visura-indula-418122207/" target="_blank">
            <img src={LinkedInIcon} className="link"></img>
            </a>

            <a href="https://github.com/visuraindula2001" target="_blank">
            <img src={GithubIcon} className="link"></img>
            </a>
            
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
