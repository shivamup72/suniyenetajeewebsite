import React from 'react';
import styles from './SpecialEntertainmentNews.module.css';
import netannyahuimg from '../../../assest/Ajaydevgan.png';
import marketing from '../../../assest/marketing.png';
import Accimg from '../../../assest/greenadd.png'
import AccAdd from '../../../assest/Acc.png'
import { Link } from 'react-router-dom';

const newsItems2 = [
    {
        id: 1,
        text: `क्यों Dharmendra का चेहरा देखते ही 
Shammi Kapoor ने दोगुनी कर दी 
थी अपनी फीस?`,
        btntxt: 'BOLLYWOOD'
    },
    {
        id: 2,
        text: `'बाजीराव सिंघम' Ajay Devgn के निशाने 
पर आए Akshay Kumar, कहा- पहले 
उससे जाकर पूछो ये सवाल`,
        btntxt: 'BOLLYWOOD'

    },
    {
        id: 3,
        text: `एक ही OTT प्लेटफॉर्म पर मिलेगी James 
Bond की 25 फिल्में, ये टॉप 5 मूवीज हैं 
Must Watch"`,
        btntxt: 'BOLLYWOOD'

    },
    {
        id: 4,
        text: `क्यों हीरोइन की गले में सिर्फ हार पहनाने से 
घबरा रहे थे Ashok Kumar? तोड़ दिया 
था खलनायक का पांव`,
        btntxt: 'BOLLYWOOD'
    },
];

function SpecialEducationNews() {
    return (
        <div>
            <div className={styles.newsaddcontainer}>
                <div className={styles.container}>
                    <div className={styles.categorySection}>
                        {newsItems2.map((item, index) => (
                            <Link
                                to={`/entertainment/${item.id}`}
                                state={{ item }}
                                key={item.id}
                                className={styles.newsLink}
                            >
                                <div key={index} className={styles.newsItem}>
                                    <p className={styles.newtxtsty}>{item.text}</p>
                                    <p className={styles.newtxtsty1}>{item.btntxt}</p>
                                </div>
                            </Link>
                        ))}
                    </div>

                    <div className={styles.imagecontainer}>
                        <img src={netannyahuimg} alt="background" className={styles.imgsty} />
                        <p className={styles.newheadline}>Singham Again के बाद भी बॉक्स ऑफिस पर
                            जारी रहेगा अजय देवगन का कब्जा, लिस्ट में शामिल
                            ये 7 बड़ी फिल्में</p>
                    </div>
                </div>
                {/* <div className={styles.addcontainer}>
                    <img src={Accimg} className={styles.addimgsty} alt="Main Advertisement" />
                    <img src={AccAdd} className={styles.addimgsty} alt="Main Advertisement" />
                </div> */}
            </div>

        </div>
    );
}

export default SpecialEducationNews;
