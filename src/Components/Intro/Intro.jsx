import React from "react";
import { useState,useEffect } from "react";
import "./intro.css";
import { Link } from 'react-scroll'

const Intro = () => {
  const items=[ "react developer" , "ui/ux designer","freelancer","web designer"]
  const [currenIndex,setCurrentIndex]=useState(0)
  useEffect(()=>{
    const interval=setInterval(()=>{
       setCurrentIndex((previndex)=>(previndex+1)% items.length);
       
    }, 2000)
    return ()=>clearInterval(interval)
  },[])
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hey There!</span>
        <span className="introText">
          Iam <span className="introName">Muzamil sid</span> <br /> <span className="item">{items[currenIndex]} </span> 
        </span>
        <p className="intropara">
          India-based React developer from Kerala. Crafting seamless web
          experiences with a passion for coding and problem-solving.
        </p>
        <a href="https://github.com/sidmuzammil/Contact-project/files/12555978/main-resume.pdf"><button className="btn">Download my Resume</button></a>
      </div>
    </section>
  );
};

export default Intro;


