import React, { useState } from 'react';
import styles from './BrekingPoliticalNews.module.css';

function BrekingPoliticalNews() {
    return (
        <div>
            <div className={styles.breakingnews}>
                <div className={styles.headingcontainer}>
                    <p className={styles.hedingtxtsty}>BREKING</p>
                </div>
                <div className={styles.ticker}>
                    <p className={styles.linesty}>
                        शिवसेना ने जारी की 20 प्रत्याशियों की सूची, आदित्य ठाकरे के खिलाफ चुनाव लड़ेंगे मिलिंद देवड़ा
                    </p>
                </div>
            </div>
        </div>
    );
}

export default BrekingPoliticalNews;
