import React from "react";
import styles from "../styles/Global";
import assets from "../assets";

const About = () => {
  return (
    <div
      id="about"
      className={`flex justify-center items-center pt-16 sm:pl-8 sm:pr-8 sm:pt-8 sm:pb-0
      ${styles.bgWhite}`}
    >
      <div
        className={`flex items-center sm:flex-col-reverse
        w-11/12 sm:w-full minmd:w-3/4`}
      >
        <div className={`${styles.flexCenter}`}>
          <img
            width={1400}
            height={1400}
            src={assets.smilingWoman}
            alt="mockup"
            className={`  
          ${styles.sectionImg} scale-x-mirror`}
          />
        </div>
        <div
          className={`w-full flex justify-start flex-col md:mb-10 lg:ml-16 sm:ml-5 md:ml-5 
          ${" fadeRightMini"}
          ${styles.textRight}
        `}
        >
          <p
            className={`
            text-purple-950
          my-5 minmd:my-10 font-Barlow font-light text-2xl minmd:text-3xl minlg:text-4xl minmd:leading-16 mr-8`}
          >
            Poka is a health app that is dedicated to helping women take charge
            of their reproductive health. Our mission is to empower women with
            the knowledge and tools they need to make informed decisions about
            their bodies and to improve access to affordable and high-quality
            healthcare.
          </p>

          <h1
            className={`
            text-purple-950
          font-bold text-right font-Barlow text-9xl sm:text-4xl minmd:text-6xl minlg:text-8xl leading-12 minmd:leading-13 mr-8`}
          >
            About us
          </h1>
          <p
            className={`
            text-purple-950
          my-5 minmd:my-10 font-Barlow font-light text-2xl minmd:text-3xl minlg:text-4xl minmd:leading-16 mr-8`}
          >
            Our team of experienced professionals are passionate about women's
            health, and we believe that by leveraging technology and innovation,
            we can create a world where every woman has the support and
            resources she needs to thrive.
          </p>
        </div>
        <div className={`flex-1 ${styles.flexCenter}p-8 sm:px-0`}></div>
      </div>
    </div>
  );
};

export default About;
