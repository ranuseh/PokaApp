import React from "react";
import styles from "../styles/Global";

const Button = ({ assetUrl, link }) => {
  return (
    <div
      className={styles.btnBlack}
      onClick={() => window.open(link, "-blank")}
    >
      <img src={assetUrl} alt="expo_icon" className={styles.btnIcon} />
      <div>
        <p className={`${styles.btnText}`} font-normal text-xs>
          View it on
        </p>
        <p className={`${styles.btnText}`} font-normal text-xs>
          View it on
        </p>

      </div>
    </div>
  );
};

export default Button;
