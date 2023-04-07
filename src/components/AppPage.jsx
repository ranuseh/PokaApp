import React from "react";
import assets from "../assets";

import styles from "../styles/Global";
import AppSignUp from "./AppSignUp";

const AppPage = () => {
  return (
    <div
      id="app"
      className={`min-h-screen ${styles.section} 
          ${styles.bgWhite}`}
    >
      <div
        className={`flex items-center 
            ${styles.boxReverseClass} 
            w-11/12 sm:w-full minmd:w-3/4`}
      >
        <div
          className={`${styles.descDiv} 
              ${" fadeRightMini"}
              ${styles.textRight}
              items-end
            `}
        >
          <h1
            className={`
              ${styles.blackText}
              ${styles.h1Text} mr-8`}
          >
            App
          </h1>
          <div className="justify content-left">
            <AppSignUp />
          </div>
        </div>
        <div className={`flex-1 ${styles.flexCenter}p-8 sm:px-0`}>
          <img
            src={assets.landingPic1}
            alt="mockup"
            className={`
               ${" fadeLeftMini"}
              ${styles.sectionImg}`}
          />
        </div>
      </div>
    </div>
  );
};

export default AppPage;
