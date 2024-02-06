import React from "react";
import "./Work.css";
import protfolio1 from "../../developing/WhatsApp Image 2024-02-06 at 11.28.00_ad0168ca.jpg";
import protfolio3 from "../../developing/WhatsApp Image 2024-02-06 at 11.27.55_ca5a1cbf.jpg"
;
import protfolio4 from "../../developing/Screenshot (10).png";

const Works = () => {
  return (
    <section id="works">
      <h2 className="worksTitle">My fav projects</h2>
      <span className="workDesc">
        My React projects showcase my expertise in building dynamic web
        applications. From interactive components to effective state management,
        my work exemplifies a deep understanding of React's intricacies. Each
        project reflects my commitment to delivering engaging and functional
        user experiences.
      </span>
      <div className="worksImgs">
        <a href="https://software-company-flax.vercel.app/">
          <h4>Software company</h4>
          <img src={protfolio1} alt="company-image" className="worksImg img1" />{" "}
          <div className="main-buttons"><a className="workBtn" href="https://software-company-flax.vercel.app/">Live site</a> <a className="workBtn" href="https://github.com/sidmuzammil/software-company">Code</a></div>
        </a>
        <a href="https://e-commerce-eta-ochre.vercel.app">
          <h4>E-commerce website</h4>
          <img src={protfolio3} alt="Calculator-img" className="worksImg" />{" "}
         <div className="main-buttons"> <a className="workBtn" href="https://e-commerce-eta-ochre.vercel.app">Live site</a> <a className="workBtn" href="https://github.com/sidmuzammil/e-commerce">Code</a></div>
        </a>
        <a href="https://origin-chat-app.firebaseapp.com/">
          <h4>Chating app</h4>
          <img src={protfolio4} alt="Chat-app-img" className="worksImg" />
          <div className="main-buttons"><a className="workBtn" href="https://origin-chat-app.firebaseapp.com/">Live site</a> <a className="workBtn" href="https://github.com/sidmuzammil/chat-application">Code</a></div>
        </a>
      </div>
      {/* <button className="workBtn">see more</button> */}
    </section>
  );
};

export default Works;
