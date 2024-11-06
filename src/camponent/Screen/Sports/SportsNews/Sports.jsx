import React from "react";
import styles from "../../Home/Home.module.css";
import Footer from "../../../common/Footer/Footer";
import About from "../../Home/AboutHome/About";
import Contucts from "../../Home/Contactsus/Contucts";
import TrendingSportsNews from "../TrendSportsNews/TrendingSportsNews";


function Sports() {
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.homecontainer}>
                    <div>
                        <TrendingSportsNews />
                        <About />
                        <Contucts />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Sports;
