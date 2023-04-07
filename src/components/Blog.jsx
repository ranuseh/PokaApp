import React from "react";
import assets from "../assets";

import styles from "../styles/Global";

const Blog = () => {
  return (
    <div
      id="about"
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
        `}
        >
          <h1
            className={`
          ${styles.blackText}
          ${styles.h1Text} mr-8`}
          >
            Blog
          </h1>
          <p
            className={`
          ${styles.blackText}
          ${styles.descriptionText} mr-8`}
          >
            STAY TUNED
          </p>
        </div>
        <div className={`flex-1 ${styles.flexCenter}p-8 sm:px-0`}>
          <img
            src={assets.womanSmiling}
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

export default Blog;
