import React from 'react';
import styles from './Add.module.css';
import Frame from "../../assest/Frame.png";
import line from "../../assest/Line.png";

function Add({ bannerImage }) {
    return (
        <div>
            <div style={{ position: "relative" }}>
                <img src={Frame} alt="frame" className={styles.framestyle} />
                <img src={line} alt="line" className={styles.lineImage} />
            </div>
            <div>
                <img src={bannerImage} className={styles.bannerimgsty} alt="banner" />
            </div>
        </div>
    );
}

export default Add;
