import React from "react";

import styles from "../styles/Global";
import WebinarSignUp from "./WebinarSignUp";

const SectionWrapper = ({
  title,
  description,
  mockupImg,
  banner,
  reverse,
  newsletter,
  id,
}) => {
  return (
    <div id={id}
      className={`min-h-screen ${styles.section} 
      ${reverse ? styles.bgWhite : styles.bgPrimary} 
      ${banner}`}
    >
      <div
        className={`flex items-center 
        ${reverse ? styles.boxReverseClass : styles.boxClass} 
        w-11/12 sm:w-full minmd:w-3/4`}
      >
        <div
          className={`${styles.descDiv} 
          ${reverse ? " fadeRightMini" : " fadeLeftMini"}
          ${reverse ? styles.textRight : styles.textLeft}
        `}
        >
          <h1
            className={`
          ${reverse ? styles.blackText : styles.whiteText}
          ${styles.h1Text} mr-8`}
          >
            {title}
          </h1>
          <p
            className={`
          ${reverse ? styles.blackText : styles.whiteText}
          ${styles.descriptionText} mr-8`}
          >
            {description}
          </p>
          <div className="justify content-left">
            {newsletter && <WebinarSignUp />}
          </div>
        </div>
        <div className={`flex-1 ${styles.flexCenter}p-8 sm:px-0`}>
          <img
            src={mockupImg}
            alt="mockup"
            className={`
           ${reverse ? " fadeLeftMini" : " fadeRightMini"}
          ${styles.sectionImg}`}
          />
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper;
