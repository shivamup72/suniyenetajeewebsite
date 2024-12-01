import React from 'react';
import { Link } from 'react-router-dom';
import styles from './SpecialEducationNews.module.css';
import netannyahuimg from '../../../assest/uppresult.png';
import marketing from '../../../assest/marketing.png';

const newsItems2 = [
    {
        id: 1,
        text: `UPPSC RO-ARO एग्जाम को लेकर अभ्यर्थियों का हंगामा, परीक्षा एक शिफ्ट में करवाने को लेकर अड़े`
    },
    {
        id: 2,
        text: `प्राचीन भारत में ‘ज्ञान, चरित्र निर्माण और कौशल’ 
थी शिक्षा की धुरी, इससे भटकाव ही बनी मुख्य 
समस्या`
    },
    {
        id: 3,
        text: `Education Day: "विकसित देश बनने के लिए शिक्षा में बड़े बदलाव जरूरी, पढ़ाई में एआई का सीमित प्रयोग ही ठीक"`
    },
    {
        id: 4,
        text: `यूनिवर्सिटी-कॉलेजों में बदलेंगे शिक्षक भर्ती के 
नियम, UGC ला रहा है फैकल्टी भर्ती नियमन का 
ड्राफ्ट; क्‍या-क्‍या होंगे बदलाव?`
    },
];

function SpecialEducationNews() {
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.categorySection}>
                    {newsItems2.map((item) => (
                        <Link
                            to={`/educationDetails/${item.id}`}
                            state={{ item }}
                            key={item.id}
                            className={styles.newsLink} 
                        >
                            <div className={styles.newsItem}>
                                <p className={styles.newtxtsty}>{item.text}</p>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className={styles.imagecontainer}>
                    <img src={netannyahuimg} alt="background" className={styles.imgsty} />
                    <p className={styles.newheadline}>
                        LIVE UP Police Bharti Result: यूपी पुलिस कॉन्स्टेबल भर्ती परीक्षा रिजल्ट uppbpb.
                        gov.in पर होगा घोषित, केवल 4 स्टेप्स में चेक कर सकेंगे नतीजे
                    </p>
                </div>
            </div>
        </div>
    );
}

export default SpecialEducationNews;
