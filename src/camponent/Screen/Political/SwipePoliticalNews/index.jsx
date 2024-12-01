import React from 'react';
import styles from './SwipeNews.module.css';
import tom from '../../../assest/swippolitics2.png';
import hollywood from '../../../assest/swippolitics1.png';
import am from '../../../assest/swippolitics.png';
import { Link } from 'react-router-dom';



// Sample data array
const newsData = [
    {
        id: 1,
        title: `Nana Patole: क्या नाना पटोले ने 
प्रदेश अध्यक्ष पद से दिया इस्तीफा? 
महाराष्ट्र कांग्रेस ने दी सफाई`,
        image: tom
    },
    {
        id: 2,
        title: `Maharashtra: शिंदे, फडणवीस या 
कोई और...? नतीजों के दो दिन बाद भी 
मुख्यमंत्री पर मंथन जारी; शपथ ग्रहण 
पर क्या है अपडेट?`,
        image: hollywood
    },
    {
        id: 3,
        title: `'आप एक न्यायाधीश है, एजेंट नहीं,' कोविड किट घोटाले पर प्रह्लाद जोशी ने डी 'कुन्हा आयोग' पर साधा निशाना`,
        image: am
    }
];


function SwipePoliticalNews() {
    return (
        <div className={styles.container}>
            <div className={styles.line1}></div>
            <div className={styles.line2}></div>
            <div className={styles.horizontalScroll}>
                {newsData.map((item) => (
                    // <Link
                    //     to={`/entertainment/${item.id}`}
                    //     state={{ item }}
                    //     key={item.id}
                    //     className={styles.newsLink}
                    // >
                        <div key={item.id}>
                            <img src={item.image} alt="News" className={styles.imgstyle} />
                            <p className={styles.headnewssty}>{item.title}</p>
                        </div>
                    // </Link>
                ))}
            </div>
            <div className={styles.line3}></div>
            <div className={styles.line4}></div>
        </div>
    );
}

export default SwipePoliticalNews;
