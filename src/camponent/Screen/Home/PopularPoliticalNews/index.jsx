import React from 'react';
import styles from '../../Breking/PopularBrekingNews/PopularBrekingNews.module.css';
import line from "../../../assest/Line.png";
import rahulpriyanka from '../../../assest/rahulpriyanka.png';
import gautam from '../../../assest/gautam.png';
import publicimg from '../../../assest/public.png';
import arvindkejariwal from '../../../assest/arvindkejariwal.png';
import degree from '../../../assest/degree.png';
import marketingone from '../../../assest/marketingone.png';
import marketing from '../../../assest/marketing.png';
import { Link } from 'react-router-dom';

const newsItems = [
    { imgSrc: rahulpriyanka, text: "Bihar Politics: राजद की इन हरकतों से राहुल-प्रियंका नाराज? खरगे ने अकेले ही संभाला मोर्चा", date: 'Saturday | October 26, 2024', news: "40 संसदीय क्षेत्रों वाले बिहार में चुनावी प्रक्रिया सात चरणों में पूरी होनी है। चौथा चरण अपने समापन की ओर है। कांग्रेस प्रत्याशियों के पक्ष में प्रचार-प्रसार के लिए खरगे फिर भी समय निकाल ले रहे हैं लेकिन राहुल को दक्षिणी और प्रियंका को उत्तरी राज्यों से ही फुर्सत नहीं। जबकि बिहार की तुलना में कांग्रेस के लिए संभावना भी अपेक्षाकृत अधिक हैं।" },
    { imgSrc: gautam, text: "नहीं टूटा गतिरोध; अडानी भी अड़े, मालभाड़ा कम किए बगैर सीमेंट प्लांट नहीं चलाएगी कंपनी", date: 'Saturday | October 26, 2024', news: 'ऊना। मैदानी जिला ऊना बुधवार को धुंध के आगोश में चला गया। धुंध इतनी थी कि 10 मीटर से आगे कुछ भी दिखाई नहीं दे रहा था। इस दौरान वाहन भी सडक़ पर रेंगते हुए नजर आए। धुंध पडऩे के साथ ही ठंड का प्रकोप भी बढ़ गया है। पिछले कई दिनों से ...' },
    { imgSrc: publicimg, text: "'पांच साल करें इंतजार, सारे वादे पूरे करेगी कांग्रेस सरकार; मुकेश अग्रिहोत्री बोले,", date: 'Saturday | October 26, 2024', news: 'ऊना। मैदानी जिला ऊना बुधवार को धुंध के आगोश में चला गया। धुंध इतनी थी कि 10 मीटर से आगे कुछ भी दिखाई नहीं दे रहा था। इस दौरान वाहन भी सडक़ पर रेंगते हुए नजर आए। धुंध पडऩे के साथ ही ठंड का प्रकोप भी बढ़ गया है। पिछले कई दिनों से ...' },
    {
        imgSrc: arvindkejariwal,
        text: "'राष्ट्रगान के लिए 52 सेकेंड खड़े नहीं हो सकते केजरीवाल', BJP ने दिल्ली CM पर लगाया आरोप",
        date: "Saturday | October 26, 2024",
        news: "नेशनल डेस्कः भारतीय जनता पार्टी (भाजपा) की दिल्ली इकाई ने सोमवार को मुख्यमंत्री अरविंद केजरीवाल पर हमला करते हुए आरोप लगाया कि उन्होंने यहां एक कार्यक्रम में राष्ट्रगान में हिस्सा नहीं लेकर इसका 'अपमान' किया।"
    }
];

function PopularPoliticalNews() {
    return (
        <div className={styles.container}>
            <p className={styles.headingsty}>Popular</p>
            <div>
                <img src={line} alt="News" className={styles.lineImage} />
            </div>
            <div className={styles.contentcontainer}>
                <div className={styles.newsGrid}>
                    {newsItems.map((item, index) => (
                        <div className={styles.trendingnewimgsty} key={index}>
                            <Link
                                to={`/homenews/${index}`}
                                state={{ item }}
                                key={index}
                                className={styles.newsLink}
                            >
                                <>
                                    <img src={item.imgSrc} className={styles.imgsty} alt="News Thumbnail" />
                                    <div className={styles.newconsty}>
                                        <p className={styles.newstxtsty}>{item.text}</p>
                                        <p className={styles.datetxtsty}>{item.date}</p>
                                        <p className={styles.newslinetxtsty}>{item.news}</p>
                                    </div>
                                </>
                            </Link>
                        </div>
                    ))}
                </div>
                <div className={styles.addcontainersty}>
                    <img src={degree} className={styles.imgsty1} />
                    <img src={marketingone} className={styles.imgsty2} />
                    <img src={marketing} className={styles.imgsty3} />
                </div>
            </div>
        </div>
    );
}

export default PopularPoliticalNews;
