import React, { useState } from 'react';
import styles from './RecentNews.module.css';
import leftImage from '../../../assest/leftimage.png';
import netannyahuimg from '../../../assest/Background.png';
import rightImage from '../../../assest/rightimage.png';
import image4 from "../../../assest/image4.png";
import image5 from "../../../assest/image5.png";
import image6 from "../../../assest/image6.png";
import { Link } from 'react-router-dom';

const newsItems = [
    {
        id: 1,
        image: netannyahuimg,
        text: 'मेरे पिता की मौत हुई, नेतन्याहू पर बढ़ा बंधकों की रिहाई का दबाव; भाषण के बीच लगे नारे',
    },
    {
        id: 2,
        image: netannyahuimg,
        text: 'दूसरा समाचार, नेतन्याहू के भाषण में विशेष बातें',
    },
    {
        id: 3,
        image: netannyahuimg,
        text: 'तीसरा समाचार, राजनीति में हलचल',
    },
];

const newsItems2 = [
    { imgSrc: image4, text: "Lucknow News : शत्रु संपत्ति भवन में चल रहा होटल कबीला सील, कई और कब्जेदार भी रडार पर- 200 संपत्तियों का लिस्ट में नाम" },
    { imgSrc: image5, text: "Bareilly News: जातिगत अपमान से तंग आकर युवक ने की आत्महत्या, वीडियो बनाकर बयां किया था अपना दर्द" },
    { imgSrc: image6, text: "'55 हजार डॉलर दो नहीं तो बम से उड़ा देंगे', लखनऊ के 9 होटलों को बम से उड़ाने की धमकी- बाद में निकली अफवाह" },
    { imgSrc: image4, text: "Lucknow News : शत्रु संपत्ति भवन में चल रहा होटल कबीला सील, कई और कब्जेदार भी रडार पर- 200 संपत्तियों का लिस्ट में नाम" },
    { imgSrc: image5, text: "Bareilly News: जातिगत अपमान से तंग आकर युवक ने की आत्महत्या, वीडियो बनाकर बयां किया था अपना दर्द" },
    { imgSrc: image6, text: "'55 हजार डॉलर दो नहीं तो बम से उड़ा देंगे', लखनऊ के 9 होटलों को बम से उड़ाने की धमकी- बाद में निकली अफवाह" },
    { imgSrc: image4, text: "Lucknow News : शत्रु संपत्ति भवन में चल रहा होटल कबीला सील, कई और कब्जेदार भी रडार पर- 200 संपत्तियों का लिस्ट में नाम" },
    { imgSrc: image5, text: "Bareilly News: जातिगत अपमान से तंग आकर युवक ने की आत्महत्या, वीडियो बनाकर बयां किया था अपना दर्द" },
    { imgSrc: image6, text: "'55 हजार डॉलर दो नहीं तो बम से उड़ा देंगे', लखनऊ के 9 होटलों को बम से उड़ाने की धमकी- बाद में निकली अफवाह" },
];

function RecentNews() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleSwipeLeft = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? newsItems.length - 1 : prevIndex - 1
        );
    };

    const handleSwipeRight = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === newsItems.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className={styles.container}>
            <h5>Recent News</h5>
            <div className={styles.contentcontainer}>
                <div className={styles.imagecontainer}>
                    <img src={newsItems[currentIndex].image} alt='background' className={styles.imgsty} />
                    <div className={styles.redOverlay}>
                        <p className={styles.headtxtsty}>{newsItems[currentIndex].text}</p>
                    </div>
                    <img
                        src={leftImage}
                        alt='Swipe Left'
                        className={styles.swipeButton}
                        onClick={handleSwipeLeft}
                    />
                    <img
                        src={rightImage}
                        alt='Swipe Right'
                        className={styles.swipeButton}
                        onClick={handleSwipeRight}
                    />
                </div>
                <div className={styles.categorySection}>
                    {newsItems2.map((item, index) => (
                        <Link
                            to={`/news/${index}`}
                            state={{ item }}
                            key={index}
                            className={styles.newsLink}
                        >
                            <div key={index} className={styles.newsItem}>
                                <img src={item.imgSrc} alt="News item" className={styles.newsImage} />
                                <p className={styles.newtxtsty}>{item.text}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}



export default RecentNews;
