import React from "react";
import styles from "../../Home/Home.module.css";
import BrekingNews from "../BrekingNews/BrekingNews";
import CategoryNews from "../Categories/CategoryNews";
import RecentNews from "../RecentNews/RecentNews";
import PopularBrekingNews from "../PopularBrekingNews/PopularBrekingNews";
import Footer from '../../../common/Footer/Footer'
import Contucts from "../../Home/Contactsus/Contucts";


function Breking() {
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.homecontainer}>
                    <div>
                        <BrekingNews />
                        <CategoryNews />
                        <RecentNews />
                        <PopularBrekingNews />
                        <Contucts/>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Breking;
