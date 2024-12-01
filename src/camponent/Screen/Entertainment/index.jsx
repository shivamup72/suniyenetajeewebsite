import React from "react";
import SpecialEntertainmentNews from "./SpecialEntertainmentNews";
import BollywoodNews from "./BollywoodNews";
import styles from './Entertainment.module.css'
import BollywoodSlidNews from "./BollywoodSlidNews";
import SwiperNews from "./SwiperNews";
import OtherBollywoodNews from "./OtherBollywoodNews";
import Whether from "../../common/Whether";
import Add from "../../common/Addvertiesment";
import addimg from '../../assest/addbanner.png'
import Footer from "../../common/Footer/Footer";


function Entertainment() {
    return (
        <div>
            <div style={{
                // display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '20px',
                marginLeft: 'auto',
                marginRight: 'auto',
                width: '96%',
                backgroundColor: '#fff',
                maxWidth: '1280px'
            }}>
                <Add bannerImage={addimg} />
                <div className={styles.innercontainer}>
                    <div>
                        <SpecialEntertainmentNews />
                        <BollywoodNews />
                    </div>
                    <div>
                        <BollywoodSlidNews />
                    </div>
                </div>
                <SwiperNews />
                <div className={styles.innercontainer}>
                    <OtherBollywoodNews />
                    <Whether />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Entertainment;
