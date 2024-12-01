import React from "react";
import styles from "./Home.module.css";
import PopularPoliticalNews from "./PopularPoliticalNews";
import RecentPoliticalNews from "./RecentPoliticalNews";
import PoliticalNews from "./PoliticalNews/PoliticalNews";
import SportAndBusiness from "./MoreNews/SportAndBusines";
import TrendingNews from "./TrendingNews";
import BrekingPoliticalNews from "./BrekingPoliticalNews/BrekingPoliticalNews";
import addbanner from '../../assest/addbanner.png'
import Add from "../../common/Addvertiesment";
import VoteAddverties from "../../common/VoteAddverties";
import Footer from "../../common/Footer/Footer";




function Home() {
  return (
    <div>
      <div className={styles.maincontainer}>
        <div className={styles.homecontainer}>
          <Add bannerImage={addbanner} />
          <BrekingPoliticalNews />
          <PoliticalNews />
          <PopularPoliticalNews />
          <RecentPoliticalNews />
          <div className={styles.trendingpolicessty}>
            <SportAndBusiness />
            <TrendingNews />
          </div>
          <VoteAddverties />
        </div>
      </div>
      <Footer />
    </div >
  );
}

export default Home;
