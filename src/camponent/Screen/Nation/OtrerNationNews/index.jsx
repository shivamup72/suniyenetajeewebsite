import React from 'react';
import styles from './othernationnew.module.css';
import sc from '../../../assest/sc.png';
import jayshankar from '../../../assest/jayshankar.png';
import shinde2 from '../../../assest/shinde2.png';
import teacher from '../../../assest/teacher.png';
import Advertisement from '../Advertisement';
import OtherNationAdd from '../OtherNationAdd';
import { Link } from 'react-router-dom';

const newsData = [
    {
        id: 1,
        image: sc,
        title: "Kerala: 'हिंदू व्हाट्सएप ग्रुप' बनाकर बुरे फंसे IAS अधिकारी, सरकार ने की सख्त कार्रवाई",
        category: "NEWS"
    },
    {
        id: 2,
        image: jayshankar,
        title: "पहले 14 नहीं 20 नवंबर को मनाया जाता था बाल दिवस, क्या है इस तारीख का महत्व; पढ़ें इतिहास",
        category: "NEWS"
    },
    {
        id: 3,
        image: shinde2,
        title: "अब गलत रिफंड का दावा करने वालों की खैर नहीं, आयकर विभाग ने जारी किया नोटिस; एक्शन की है पूरी तैयारी",
        category: "NEWS"
    },
    {
        id: 4,
        image: teacher,
        title: "'भगवान और समाज के लिए तुम...' लॉरेंस बिश्नोई के भाई ने कैसे किया शूटर का ब्रेनवॉश? आरोपी शिवा ने खोले चौंकाने वाले राज",
        category: "NEWS"
    },
    {
        id: 5,
        image: jayshankar,
        title: "पहले 14 नहीं 20 नवंबर को मनाया जाता था बाल दिवस, क्या है इस तारीख का महत्व; पढ़ें इतिहास",
        category: "NEWS"
    },
];


function OtrerNationNews() {
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.homecontainer}>
                    <div className={styles.newscontainer}>
                        {newsData.map((item) => (
                            <Link
                                to={`/nation/${item.id}`}
                                state={{ item }}
                                key={item.id}
                                className={styles.newsLink}
                            >

                                <div key={item.id} className={styles.nationnews}>
                                    <img src={item.image} className={styles.imgsty} alt="news" />
                                    <div>
                                        <p className={styles.newstxtsty}>{item.title}</p>
                                        <p className={styles.btntxtsty}>{item.category}</p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                    <div>
                        <OtherNationAdd />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OtrerNationNews;
