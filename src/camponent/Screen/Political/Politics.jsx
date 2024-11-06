import React from "react";
import styles from "../../Screen/Home/Home.module.css";
import Footer from "../../common/Footer/Footer";
import Add from "./Advertiesment/Add";
import BrekingPoliticalNews from "./BrekingPoliticalNews/BrekingPoliticalNews";
import PoliticalNews from "./PoliticalNews/PoliticalNews";



function Sports() {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.homecontainer}>
          <Add />
          <BrekingPoliticalNews />
          <PoliticalNews />
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default Sports;
