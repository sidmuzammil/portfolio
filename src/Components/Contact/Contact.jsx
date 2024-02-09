import React, { useRef } from "react";
import "./contact.css";
import watsupIcon from "../../react-portfolio-assets/assets/whatsapp (1).png";
import linkedinIcon from "../../react-portfolio-assets/assets/linkedin (1).png";
import instagramIcon from "../../react-portfolio-assets/assets/instagram (1).png";
import emailjs from "@emailjs/browser";

// import InstaLink from "https://www.instagram.com/invites/contact/?i=1lcp0m8zgsnec&utm_content=kg10lru"
// import facebookIcon from "../../react-portfolio-assets/assets/facebook.png"
// import facebookIcon from "../../react-portfolio-assets/assets/facebook.png"

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_uxh3ebm",
        "template_873bzeb",
        form.current,
        "OlpYQuxEdsBmsrjsG"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert("E-mail have successfully send")
          // return(<div className="good">E mail have send</div>)
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
          please fill out the form below to discuss any work oportunities
        </span>
        <form action="" ref={form} className="contactForm" onSubmit={sendEmail}>
          <input type="text" className="name" placeholder="your name" name='user_name'/>
          <input type="email" className="email" placeholder="your E-mail" name='user_email'/>
          <textarea
            className="msg"
            name="message"
            id=""
            rows="5"
            placeholder="your message"
          ></textarea>
          <button type="submit" value="send" className="submitBtn">
            Submit
          </button>
          <div className="links">
            <a href="https://wa.me/+917306792972"><img src={watsupIcon} alt="" className="link" /></a>
            <a href="https://www.instagram.com/sid_muzamil_/"><img src={instagramIcon} alt="" className="link" /></a>
            <a href="https://www.linkedin.com/in/muzamil-sid-12b694286/"><img src={linkedinIcon} alt="" className="link" /></a>
            {/* <img src={} alt="" className="link" /> */}
          </div>
          
        </form>
     
      </div>
    </section>
  );
};

export default Contact;
