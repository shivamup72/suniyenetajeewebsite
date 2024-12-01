import React from 'react';
import styles from './NationAdd.module.css';
import Frame from "../../../assest/Frame.png";
import line from "../../../assest/Line.png";
import addbanner from '../../../assest/nationadd.png';
import nationimg1 from '../../../assest/nationimg1.png';
import tax from '../../../assest/tax.png';
import shooter from '../../../assest/sooter.png';
import sainik from '../../../assest/sainik.png';
import Advertisement from '../Advertisement';
import SwipeNationNews from '../SwipeNationNews';
import OtrerNationNews from '../OtrerNationNews';
import { Link } from 'react-router-dom';
import addimg from '../../../assest/educationadd.png'
import Add from '../../../common/Addvertiesment';

const newsData = [
    {
        id: 1,
        image: nationimg1,
        title: "Kerala: 'हिंदू व्हाट्सएप ग्रुप' बनाकर बुरे फंसे IAS अधिकारी, सरकार ने की सख्त कार्रवाई",
        category: "NEWS"
    },
    {
        id: 2,
        image: tax,
        title: "पहले 14 नहीं 20 नवंबर को मनाया जाता था बाल दिवस, क्या है इस तारीख का महत्व; पढ़ें इतिहास",
        category: "NEWS"
    },
    {
        id: 3,
        image: shooter,
        title: "अब गलत रिफंड का दावा करने वालों की खैर नहीं, आयकर विभाग ने जारी किया नोटिस; एक्शन की है पूरी तैयारी",
        category: "NEWS"
    },
    {
        id: 4,
        image: sainik,
        title: "'भगवान और समाज के लिए तुम...' लॉरेंस बिश्नोई के भाई ने कैसे किया शूटर का ब्रेनवॉश? आरोपी शिवा ने खोले चौंकाने वाले राज",
        category: "NEWS"
    },
    {
        id: 5,
        image: shooter,
        title: "अब गलत रिफंड का दावा करने वालों की खैर नहीं, आयकर विभाग ने जारी किया नोटिस; एक्शन की है पूरी तैयारी",
        category: "NEWS"
    },
    {
        id: 6,
        image: sainik,
        title: "'भगवान और समाज के लिए तुम...' लॉरेंस बिश्नोई के भाई ने कैसे किया शूटर का ब्रेनवॉश? आरोपी शिवा ने खोले चौंकाने वाले राज",
        category: "NEWS"
    },
];


function NationAdd() {
    return (
        <div>
            <Add bannerImage={addimg} />
            <div className={styles.container}>
                <div className={styles.bottombordersty}></div>
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
                        <Advertisement />
                    </div>
                </div>
                <SwipeNationNews />
                <OtrerNationNews />
            </div>
        </div>
    );
}

export default NationAdd;
