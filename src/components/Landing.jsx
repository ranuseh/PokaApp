import React from "react";
import assets from "../assets";
import AppSignUp from "./AppSignUp";

const Landing = () => {
  return (
    <section
      id="home"
      className={`flex justify-center items-center pt-8 sm:pl-4 sm:pr-4 sm:pt-4 sm:pb-0 bg-primary banner03`}
    >
      <div
        className={`flex items-center flex-row md:flex-col w-11/12 sm:w-full minmd:w-3/4`}
      >
        <div
          className={`flex-1 w-full flex justify-start flex-col md:mb-5 lg:ml-52 sm:ml-5 md:ml-5 fadeLeftMini text-left flex`}
        >
          <h1
            className={`text-purple font-Barlow text-6xl sm:text-5xl minmd:text-7xl minlg:text-9xl leading-12 minmd:leading-13 mr-8 pb-20`}
          >
            Empowering <b>women</b> one cycle at a time
          </h1>
          <h1
            className={`text-purple font-Barlow text-2xl sm:text-4xl minmd:text-2xl minlg:text-2xl leading-12 minmd:leading-13 mr-8 pb-5`}
          >
            Take charge of your reproductive health with <b> POKA app</b>
          </h1>
          <AppSignUp />
        </div>
        <div className={`flex-1 flex justify-center items-center`}>
          <img
            src={assets.landingPic}
            alt="mockup"
            className={`minmd:w-11/12 minmd:h-11/12 object-contain scale-x-mirror`}
          />
        </div>
      </div>
    </section>
  );
};

export default Landing;
