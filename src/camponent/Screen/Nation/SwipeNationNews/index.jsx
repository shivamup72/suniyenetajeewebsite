import React from 'react';
import styles from './SwipeNews.module.css';
import trump from '../../../assest/trump.png';
import cm from '../../../assest/cm.png';
import ramayan from '../../../assest/ramayan.png';
import { Link } from 'react-router-dom';

const newsData = [
    {
        imgSrc: trump,
        description: "भारत पर कैसा होगा डोनाल्ड ट्रंप की आर्थिक नीतियों का असर? SBI की रिपोर्ट में बड़ा खुलासा; ये सेक्टर हो सकते प्रभावित"
    },
    {
        imgSrc: cm,
        description: "'आप एक न्यायाधीश है, एजेंट नहीं,' कोविड किट घोटाले पर प्रह्लाद जोशी ने डी 'कुन्हा आयोग' पर साधा निशाना"
    },
    {
        imgSrc: ramayan,
        description: "दुनियाभर में छाया श्रीलंका की एयरलाइंस का विज्ञापन, रामकथा का किया अद्भुत चित्रण; हिंदू धर्म ग्रंथ की प्रामाणिकता समझायी"
    }
];

function SwipeNationNews() {
    return (
        <div >
            <div className={styles.container}></div>
            <div className={styles.container2}></div>
            <div className={styles.scrollContainer}>
                {newsData.map((item, index) => (

                    <div key={index} className={styles.homcontainer}>
                        <Link
                            to={`/nation/${item.id}`}
                            state={{ item }}
                            key={item.id}
                            className={styles.newsLink}
                        >
                            <img src={item.imgSrc} className={styles.imgstyle} alt="news" />
                            <p className={styles.newstxtsty}>{item.description}</p>
                        </Link>

                    </div>
                ))}
            </div>
            <div className={styles.container2}></div>
            <div className={styles.container}></div>
        </div >
    );
}

export default SwipeNationNews;
