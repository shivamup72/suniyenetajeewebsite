import React from "react";
import styles from "../../Home/Home.module.css";
import BrekingNews from "../BrekingNews/BrekingNews";
import CategoryNews from "../Categories/CategoryNews";
import RecentNews from "../RecentNews/RecentNews";
import PopularBrekingNews from "../PopularBrekingNews/PopularBrekingNews";
import Footer from '../../../common/Footer/Footer';
import Add from "../../../common/Addvertiesment";
import addimg from "../../../assest/WorldAdd.png";
import VoteAddverties from "../../../common/VoteAddverties";


function Breking() {
    return (
        <div>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: '20px',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    width: '96%',
                    backgroundColor: '#fff',
                    maxWidth: '1280px'
                }}
            >
                <div className={styles.homecontainer}>
                    <div>
                        <Add bannerImage={addimg}/>
                        <BrekingNews />
                        <CategoryNews />
                        <RecentNews />
                        <PopularBrekingNews />
                        <VoteAddverties />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Breking;
