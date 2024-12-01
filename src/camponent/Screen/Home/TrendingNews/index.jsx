import React from 'react';
import image1 from '../../../assest/sheep.png';
import image2 from '../../../assest/polution.png';
import image3 from '../../../assest/silent.png';

import styles from './TrendingNews.module.css';
import { Link } from 'react-router-dom';

const newsData = [
    {
        id: 1,
        image: image1,
        text: 'अमेरिकी आयात में चीन के घटे हिस्से का अधिक लाभ वियतनाम, ताइवान जैसे देशों को, निवेश से ही बढ़ेंगे भारत के अवसर',
    },
    {
        id: 2,
        image: image2,
        text: 'प्रदूषण से निपटने को एयरशेड स्तर की वायु गुणवत्ता प्रबंधन नीति चाहिए, पूरे साल के लिहाज से बनानी होगी ग्रैप के लिए रणनीति',
    },
    {
        id: 3,
        image: image3,
        text: 'चक्रवात के कारण बदले हवा के रुख से भी दिल्ली में बढ़ा प्रदूषण, हवा की धीमी गति ने बिगाड़े हालात',
    },
];

function TrendingNews() {
    return (
        <div className={styles.container}>
            {newsData.map((news, index) => ( // Add `index` as the second argument
                <Link
                    to={`/homenews/${index}`} // Use `index` here
                    state={{ item: news }} // Pass the `news` item in state
                    key={news.id} // Use `news.id` as the key
                    className={styles.newsLink}
                >
                    <div className={styles.newsItem}>
                        <img src={news.image} className={styles.imgsty} alt="News" />
                        <div style={{ width: '332px' }}>
                            <p className={styles.newstxtsty}>{news.text}</p>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default TrendingNews;
