import React from "react";
import styles from "./About.module.css";
import mobileapp from "../../../assest/mobileapp.png";

function About() {
  return (
    <div>
      <div className={styles.flexContainer}>
        <div>
          <div className={styles.textContainer}>
            <h1>
              अब पाओ <span className={styles.mobileColor}>राजनीति</span> की सारी
              जानकरी अपने <span className={styles.mobileColor}>Mobile</span> से{" "}
            </h1>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <img src={mobileapp} alt="Help" className={styles.helpImage} />
        </div>
      </div>
    </div>
  );
}

export default About;
