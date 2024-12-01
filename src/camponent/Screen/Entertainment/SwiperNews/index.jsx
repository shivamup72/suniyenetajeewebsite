import React from 'react';
import styles from './SwiperNews.module.css';
import tom from '../../../assest/tomimg.png';
import hollywood from '../../../assest/hollywood.png';
import am from '../../../assest/am.png';
import { Link } from 'react-router-dom';



// Sample data array
const newsData = [
    {
        id: 1,
        title: `Mission Impossible 8 Teaser: 
आखिरी मिशन पर लौटे Tom Cruise, 
रोमांच से भरपूर मिशन इम्पॉसिबल 8 का टीजर-ट्रेलर`,
        image: tom
    },
    {
        id: 2,
        title: `Avatar 3: कैसी होगी पेंडोरा की दुनिया, 
सामने आई पहली झलक, रिलीज डेट से भी उठा पर्दा`,
        image: hollywood
    },
    {
        id: 3,
        title: `AI ने The Beatles को दिलाए 
Grammy Awards 2025 में दो 
नॉमिनेशन, सुर्खियों में बैंड`,
        image: am
    }
];


function SwiperNews() {
    return (
        <div className={styles.container}>
            <div className={styles.line1}></div>
            <div className={styles.line2}></div>
            <div className={styles.horizontalScroll}>
                {newsData.map((item) => (
                    <Link
                        to={`/entertainment/${item.id}`}
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

export default SwiperNews;
