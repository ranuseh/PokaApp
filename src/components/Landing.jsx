import React from "react";
import assets from "../assets";
import styles from "../styles/Global";
import WebinarSignUp from "./WebinarSignUp";

const Landing = () => {
  return (
    <section
      id="home"
      className={`min-h-screen ${styles.section} 
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
          ${styles.textLeft}
        `}
        >
          <h1
            className={`
          ${styles.whiteText}
          ${styles.h1Text} mr-8`}
          >
            POKA
          </h1>
          <p
            className={`
          ${styles.whiteText}
          ${styles.descriptionText} mr-8`}
          >
            Empowering women one cycle at a time
          </p>
          <div className="justify content-left">
            <WebinarSignUp />
          </div>
        </div>
        <div className={`flex-1 ${styles.flexCenter}p-8 sm:px-0`}>
          <img
            width="40"
            height="40"
            src={assets.landingPic}
            alt="mockup"
            className={`
           ${"fadeRightMini"}
          ${styles.sectionImg}`}
          />
        </div>
      </div>
    </section>
  );
};

export default Landing;
