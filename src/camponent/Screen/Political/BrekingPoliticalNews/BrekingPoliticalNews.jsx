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


// const newsItems = [
//     {
//         id: 1,
//         image: netannyahuimg,
//         text: 'मेरे पिता की मौत हुई, नेतन्याहू पर बढ़ा बंधकों की रिहाई का दबाव; भाषण के बीच लगे नारे',
//     },
// ];

// const newsItems2 = [
//     {
//         text: `Delhi News: निगम की लापरवाही बनी मासूम का काल, खुले नाले में गिरने से बच्चे की मौत; पांच दिन से था लापता`
//     },
//     {
//         text: `Bihar Politics: 'मोदी ने गिरिराज को कपड़ा नहीं, लफड़ा मंत्री बना रखा है' केंद्रीय मंत्री के विवादित बयान पर भड़की RJD`
//     },
//     {
//         text: `'कई लोग नहीं चाहते कि आपके बच्चे पढ़-लिख जाए', मनीष सिसोदिया ने बताई इसके पीछे की वजह`
//     },
//     {
//         text: `Lucknow News : शत्रु संपत्ति भवन में चल रहा होटल कबीला सील, कई और कब्जेदार भी रडार पर- 200 संपत्तियों का लिस्ट में नाम`
//     },
// ];


{/* <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div className={styles.categorySection}>
                    {newsItems2.map((item, index) => (
                        <div key={index} className={styles.newsItem}>
                            <p className={styles.newtxtsty}>{item.text}</p>
                        </div>
                    ))}
                </div>

                <div className={styles.imagecontainer}>
                    <img src={newsItems[currentIndex].image} alt="background" className={styles.imgsty} />
                    <div className={styles.redOverlay}>
                        <p className={styles.headtxtsty}>{newsItems[currentIndex].text}</p>
                    </div>
                </div>

                <div>
                    <img src={marketing} alt="marketing" className={styles.marketingimgsty} />
                </div>
            </div> */}

