import React from "react";
import "./Work.css";
import protfolio1 from "../../developing/WhatsApp Image 2024-02-06 at 11.28.00_ad0168ca.jpg";
import protfolio3 from "../../developing/WhatsApp Image 2024-02-06 at 11.27.55_ca5a1cbf.jpg"
;
import protfolio4 from "../../developing/Screenshot (10).png";
import { motion } from "framer-motion";

const Works = () => {
  return (
    <section id="works">
      <motion.h2 initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:.2}} className="worksTitle">My fav projects</motion.h2>
      <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:.2}} className="workDesc">
        My React projects showcase my expertise in building dynamic web
        applications. From interactive components to effective state management,
        my work exemplifies a deep understanding of React's intricacies. Each
        project reflects my commitment to delivering engaging and functional
        user experiences.
      </motion.span>
      <div className="worksImgs">
        <a href="https://software-company-flax.vercel.app/">
          <motion.h4 initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:.2}}>Software company</motion.h4>
          <motion.img initial={{x:1000}} whileInView={{x:1}} src={protfolio1} transition={{duration:.5}} alt="company-image" className="worksImg img1" />{" "}
          <div className="main-buttons"><a className="workBtn" href="https://software-company-flax.vercel.app/">Live site</a> <a className="workBtn" href="https://github.com/sidmuzammil/software-company">Code</a></div>
        </a>
        <a href="https://e-commerce-eta-ochre.vercel.app">
          <motion.h4 initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:.2}}>E-commerce website</motion.h4>
          <motion.img initial={{opacity:0}} whileInView={{opacity:1}}  transition={{delay:.5}} src={protfolio3} alt="Calculator-img" className="worksImg" />{" "}
         <div className="main-buttons"> <a className="workBtn" href="https://e-commerce-eta-ochre.vercel.app">Live site</a> <a className="workBtn" href="https://github.com/sidmuzammil/e-commerce">Code</a></div>
        </a>
        <a href="https://origin-chat-app.firebaseapp.com/">
          <motion.h4 initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:.2}}>Chating app</motion.h4>
          <motion.img initial={{x:-1000}} whileInView={{x:1}} transition={{duration:.5}} src={protfolio4} alt="Chat-app-img" className="worksImg" />
          <div className="main-buttons"><a className="workBtn" href="https://origin-chat-app.firebaseapp.com/">Live site</a> <a className="workBtn" href="https://github.com/sidmuzammil/chat-application">Code</a></div>
        </a>
      </div>
      {/* <button className="workBtn">see more</button> */}
    </section>
  );
};

export default Works;
