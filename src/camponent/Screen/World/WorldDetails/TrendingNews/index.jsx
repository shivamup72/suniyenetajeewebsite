import React from 'react';
import image1 from '../../../../assest/sheep.png';
import image2 from '../../../../assest/polution.png';
import image3 from '../../../../assest/silent.png';
import degree from '../../../../assest/degree.png';
import marketingone from '../../../../assest/marketingone.png';
import marketing from '../../../../assest/marketing.png';
import styles from './Trending.module.css';

const newsData = [
    {
        id: 1,
        image: image1,
        text: `Himachal News: विधानसभा अध्यक्ष 
पठानिया के खिलाफ बीजेपी विधायक की
 टिप्पणी पर हंगामा, निंदा प्रस्ताव पारित`,
    },
    {
        id: 2,
        image: image2,
        text: `Parliament Session: 'गांधी परिवार 
की सत्ता की भूख से सदन में डगमगाया 
I.N.D.I.A', भाजपा ने निंदा प्रस्ताव पर 
विपक्ष पर कसा तंज`,
    },
    {
        id: 3,
        image: image3,
        text: `तृणमूल मणिपुर हिंसा पर विधानसभा में 
लाएगा निंदा प्रस्ताव, BJP ने कहा- हम 
पंचायत चुनाव हिंसा पर चाहते हैं चर्चा`,
    },
    {
        id: 4,
        image: image1,
        text: `अमेरिकी आयात में चीन के घटे हिस्से का 
अधिक लाभ वियतनाम, ताइवान जैसे देशों 
को, निवेश से ही बढ़ेंगे भारत के अवसर`,
    },
    {
        id: 5,
        image: image2,
        text: `प्रदूषण से निपटने को एयरशेड स्तर की वायु 
गुणवत्ता प्रबंधन नीति चाहिए, पूरे साल के 
लिहाज से बनानी होगी ग्रैप के लिए रणनीति`,
    },
    {
        id: 6,
        image: image3,
        text: `चक्रवात के कारण बदले हवा के रुख से भी दिल्ली में बढ़ा प्रदूषण, हवा की धीमी गति ने बिगाड़े हालात`,
    },

];


function TrendingNews() {
    return (
        <div className={styles.container}>
            <div className={styles.addcontainersty}>
                <img src={degree} className={styles.imgsty1} />
                <img src={marketingone} className={styles.imgsty2} />
                <img src={marketing} className={styles.imgsty3} />
            </div>
            {newsData.map((news) => (
                <div key={news.id} className={styles.newsItem}>
                    <img src={news.image} className={styles.imgsty} alt="News" />
                    <div style={{ width: '332px' }}>
                        <p className={styles.newstxtsty}>{news.text}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default TrendingNews;
