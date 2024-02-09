import React from "react";
import { useState,useEffect } from "react";
import "./intro.css";
import { motion } from "framer-motion";
import { Link } from 'react-scroll'

const Intro = () => {

  const textVarients = {
    initial: {
      x: -1000,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
    blinking: {
      opacity: 0,
      y: 10,
      transition: {
        duration: 2,
        repeat: Infinity,
      },
    },
  };
  const sliderVarients = {
    initial: {
      x: 0,
    },
    animate: {
      x: "-220%",
      transition: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 20,
      },
    },
  };

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
        <motion.span variants={textVarients} initial="initial" animate="animate" className="hello">Hey There!</motion.span>
        <motion.span className="introText" variants={textVarients} initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.5}}>
          Iam <span className="introName">Muzamil sid</span> <br /> <span  className="item">{items[currenIndex]} </span> 
        </motion.span>
        <motion.p variants={textVarients} initial="initial" animate="animate"  className="intropara">
          India-based React developer from Kerala. Crafting seamless web
          experiences with a passion for coding and problem-solving.
        </motion.p>
        <motion.a whileHover={{scale:1.1}} href="https://github.com/sidmuzammil/Contact-project/files/12555978/main-resume.pdf"><button className="btn">Download my Resume</button></motion.a>
      </div>
    </section>
  );
};

export default Intro;


