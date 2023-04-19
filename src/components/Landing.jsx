import React from "react";
import assets from "../assets";
import styles from "../styles/Global";
import WebinarSignUp from "./WebinarSignUp";

const Landing = () => {
  return (
    <section
      id="home"
      className={`${styles.section} 
      ${styles.bgPrimary} 
      banner03`}
    >
      <div
        className={`flex items-center 
        ${styles.boxClass} 
        w-11/12 sm:w-full minmd:w-3/4`}
      >
        <div
          className={`${styles.descDiv} 
          ${" fadeLeftMini"}
          ${styles.textLeft} flex
        `}
        >
          <h1
            className={`
            text-purple-950
          ${styles.h2Text} mr-8`}
          >
            Empowering <b>women</b>
          </h1>
          <h1
            className={`
            text-purple-950
          ${styles.h2Text} mr-8`}
          >
            one cycle at a time
          </h1>
          <div className="justify content-left">
            <WebinarSignUp />
          </div>
        </div>
        <div className={`flex-1 ${styles.flexCenter}`}>
          <img
            src={assets.landingPic}
            alt="mockup"
            className={`  
          ${styles.sectionImg} scale-x-mirror`}
          />
        </div>
      </div>
    </section>
  );
};

export default Landing;
