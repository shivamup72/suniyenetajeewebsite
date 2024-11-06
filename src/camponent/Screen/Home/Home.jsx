import React from "react";
import styles from "./Home.module.css";
import modiji from "../../assest/rahul.png";
import sinha from "../../assest/sinhaji.png";
import appparty from "../../assest/aamparty.png";
import salman from "../../assest/salman.png";
import TrendingNews from "./Trending/TrendingNews";
import News from "./New/News";
import Vote from "./Vote/Vote";
import About from "./AboutHome/About";
import Footer from "../../common/Footer/Footer";
import HomeScreen from "./HomeScreen/HomeScreen";
import Contucts from "./Contactsus/Contucts";

function Home() {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.homecontainer}>
          <div>
            <HomeScreen />
            <TrendingNews />
            <News />
            <Vote />
            <About />
            <Contucts />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
