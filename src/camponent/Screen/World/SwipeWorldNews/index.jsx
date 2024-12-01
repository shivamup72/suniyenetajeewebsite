import React from 'react';
import styles from './SwipeWorldNews.module.css';
import tom from '../../../assest/trump.png';
import hollywood from '../../../assest/tameto.png';
import am from '../../../assest/chinapm.png';
import { Link } from 'react-router-dom';



// Sample data array
const newsData = [
    {
        id: 1,
        title: `भारत पर कैसा होगा डोनाल्ड ट्रंप की आर्थिक नीतियों का असर? SBI की रिपोर्ट में बड़ा खुलासा; ये सेक्टर हो सकते प्रभावित`,
        image: tom
    },
    {
        id: 2,
        title: `6 महीने बाद अंतरिक्ष से लौटे 3 चीनी यात्री, स्पेस स्टेशन पर टमाटर उगाए; एक ने तो रिकॉर्ड कायम कर दिया`,
        image: hollywood
    },
    {
        id: 3,
        title: `'बॉर्डर से पीछे हट रहे सैनिक', भारत के साथ सीमा समझौते पर बोला चीन; लेकिन इस सवाल पर ड्रैगन ने साधी चुप्पी`,
        image: am
    }
];


function SwipeWorldNews() {
    return (
        <div className={styles.container}>
            <div className={styles.line1}></div>
            <div className={styles.line2}></div>
            <div className={styles.horizontalScroll}>
                {newsData.map((item) => (
                    <Link
                        to={`/world/${item.id}`}
                        state={{ item }}
                        key={item.id}
                        className={styles.newsLink}
                    >
                        <div key={item.id}>
                            <img src={item.image} alt="News" className={styles.imgstyle} />
                            <p className={styles.headnewssty}>{item.title}</p>
                        </div>
                    </Link>
                ))}
            </div>
            <div className={styles.line3}></div>
            <div className={styles.line4}></div>
        </div>
    );
}

export default SwipeWorldNews;
