import React from "react";

import styles from "../styles/Global";

const Button = ({ assetUrl, link }) => {
  return (
    <div
      className={styles.btnBlack}
      onClick={() => window.open(link, "_blank")}
    >
      <div className="flex flex-col justify-start ml-4">
        <p className={`${styles.btnText} font-normal text-xs`}>Learn More</p>
      </div>
    </div>
  );
};

export default Button;
