import React from "react";
import styles from "../styles/Global";

const About = () => {
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
          ${styles.textLeft}
        `}
        >
          <h1
            className={`
          ${styles.blackText}
          ${styles.h1Text} mr-8`}
          >
            About
          </h1>
          <p
            className={`
          ${styles.blackText}
          ${styles.descriptionText} mr-8`}
          >
            Poka is a health app that is dedicated to helping women take charge
            of their reproductive health. Our mission is to empower women with
            the knowledge and tools they need to make informed decisions about
            their bodies and to improve access to affordable and high-quality
            healthcare.
          </p>
          <p
            className={`
          ${styles.blackText}
          ${styles.descriptionText} mr-8`}
          >
            Our team of experienced professionals are passionate about women's
            health, and we believe that by leveraging technology and innovation,
            we can create a world where every woman has the support and
            resources she needs to thrive.
          </p>
        </div>
        <div className={`flex-1 ${styles.flexCenter}p-8 sm:px-0`}>
        </div>
      </div>
    </div>
  );
};

export default About;
