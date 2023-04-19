import React from "react";

import styles from "../styles/Global";
import AppSignUp from "./AppSignUp";

const AppPage = () => {
  return (
    <div
      id="app"
      className={`flex justify-center items-center
          ${styles.bgWhite}`}
    >
      <div
        className={`flex items-center 
            w-11/12 minmd:w-3/4 py-20`}
      >
        <div
          className={`flex-1 w-full flex justify-start flex-col
              items-center
            `}
        >
          <h1
            className={`
            text-purple
            font-bold italic font-Barlow text-9xl sm:text-4xl minmd:text-6xl minlg:text-8xl leading-12 minmd:leading-13`}
          >
            Coming Soon
          </h1>
          <AppSignUp />
        </div>
      </div>
    </div>
  );
};

export default AppPage;
