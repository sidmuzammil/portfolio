import React from "react";
import "./skills.css";
import ReactImg from "../../zidhus-protfolio-logo-zip-file/science.png";
import FrontendImg from "../../zidhus-protfolio-logo-zip-file/ux.png";
import designImg from "../../zidhus-protfolio-logo-zip-file/web-design.png";
import { delay, motion } from "framer-motion";

const Skills = () => {
  const textVarients = {
    initial: {
      x: -1000,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: .2,
        staggerChildren: 0.1,
      },
    },
    blinking: {
      opacity: .6,
      y: 0,
      transition: {
        duration: 1.5,
        repeat: Infinity,
      },
    },
  };
  return (
    <section id="skills">
      <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:.2}}  className="skillTitle">What I Do</motion.span>
      <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:.2}} className="skillDesc">
        I specialize in full-stack development, creating seamless web
        applications that integrate robust front-end and back-end solutions.
        Expect efficient, user-friendly,  and comprehensive results
        tailored to your business needs.
      </motion.span>
      <div className="skillBars">
        <div className="skillBar">
          <motion.img variants={textVarients} animate="blinking" src={ReactImg} alt="" className="skillBarImg" />
          <div className="skillBarText">
            <motion.h2 initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:.2}}>React Js</motion.h2>
            <motion.p initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:.2}}>
              Proficient in React.js, I create dynamic user interfaces using
              components, state management, and API integration to deliver
              seamless user experiences.
            </motion.p>
          </div>
        </div>
        <div className="skillBar">
          <motion.img variants={textVarients} animate="blinking" src={FrontendImg} alt="" className="skillBarImg" />
          <div className="skillBarText">
            <motion.h2 initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:.2}}>Frontend developing</motion.h2>
            <motion.p initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:.2}}>
              I specialize in frontend development, creating engaging and
              responsive interfaces that blend design and functionality
              seamlessly for exceptional user experiences.
            </motion.p>
          </div>
        </div>
        <div className="skillBar">
          <motion.img variants={textVarients} animate="blinking" src={designImg} alt="" className="skillBarImg" />
          <div className="skillBarText">
            <motion.h2 initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:.2}}>Designing</motion.h2>
            <motion.p initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:.2}}>
              I'm a skilled designer, crafting visually appealing and
              user-centered digital experiences that seamlessly integrate
              aesthetics and functionality.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
