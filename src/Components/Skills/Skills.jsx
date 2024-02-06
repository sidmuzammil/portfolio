import React from "react";
import "./skills.css";
import ReactImg from "../../zidhus-protfolio-logo-zip-file/science.png";
import FrontendImg from "../../zidhus-protfolio-logo-zip-file/ux.png";
import designImg from "../../zidhus-protfolio-logo-zip-file/web-design.png";

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I Do</span>
      <span className="skillDesc">
        I specialize in full-stack development, creating seamless web
        applications that integrate robust front-end and back-end solutions.
        Expect efficient, user-friendly,  and comprehensive results
        tailored to your business needs.
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={ReactImg} alt="" className="skillBarImg" />
          <div className="skillBarText">
            <h2>React Js</h2>
            <p>
              Proficient in React.js, I create dynamic user interfaces using
              components, state management, and API integration to deliver
              seamless user experiences.
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={FrontendImg} alt="" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Frontend developing</h2>
            <p>
              I specialize in frontend development, creating engaging and
              responsive interfaces that blend design and functionality
              seamlessly for exceptional user experiences.
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={designImg} alt="" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Designing</h2>
            <p>
              I'm a skilled designer, crafting visually appealing and
              user-centered digital experiences that seamlessly integrate
              aesthetics and functionality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
