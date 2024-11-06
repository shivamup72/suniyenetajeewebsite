import React from "react";
import styles from "./Contucts.module.css";
// import { Link } from "react-router-dom";

const Contucts = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>
          Speak Out Your Unfiltered & Unbiased Opinions
        </h1>
        <p className={styles.description}>
          Stay informed, keep informed and take action with{" "}
          suniye neta jee app
        </p>
        <p className={styles.descriptionHindi}>
          Suniye Neta Jee app is a platform where you can speak out your
          unfiltered & unbiased opinions without distress. Our aim is to provide
          every individual of every age a voice in our country. Stay informed
          with real-time news, events, and discussions. Be part of the pulse of
          political conversations as they happen. Connect with like-minded
          individuals, build networks, and collaborate on initiatives. Together,
          we can create positive change.
        </p>
      </div>
      {/* <Link to="/contacts">
        <button
          className={`${styles.contactButton} ${styles.contactButtonHover}`}
        >
          Contact us
        </button>
      </Link> */}
    </div>
  );
};

export default Contucts;
