import React from 'react';
import styles from './othernews.module.css';
import nationimg1 from '../../../assest/sinhaji.png';
import tax from '../../../assest/aamparty.png';
import shooter from '../../../assest/Bollywood4.png';
import sainik from '../../../assest/nitin.png';
import politics4 from '../../../assest/river.png';
import OtherSideNews from '../OtherSideNews';



const newsData = [
    {
        id: 1,
        image: nationimg1,
        title: "Maharashtra CM: फडणवीस या शिंदे, कौन होगा महाराष्ट्र का असली बॉस? आज हो सकता है सीएम पर फैसला",
        category: "NEWS",
    },
    {
        id: 2,
        image: tax,
        title: "Maharashtra Vidhan Sabha Election Result 2024: पीएम मोदी बोले- एक हैं, तो सेफ हैं... ये आज देश का महामंत्र बन चुका है",
        category: "NEWS",
    },
    {
        id: 3,
        image: shooter,
        title: "Maharashtra Election Result: यह अंत नहीं, आरंभ है... करारी हार के बाद अमित ठाकरे बोले- मेरी लड़ाई बहुत लंबी",
        category: "NEWS",
    },
    {
        id: 4,
        image: sainik,
        title: "'भगवान और समाज के लिए तुम...' लॉरेंस बिश्नोई के भाई ने कैसे किया शूटर का ब्रेनवॉश? आरोपी शिवा ने खोले चौंकाने वाले राज",
        category: "NEWS",
    },
    {
        id: 5,
        image: politics4,
        title: "छात्राओं के लिए मासिक धर्म संबंधी स्वच्छता नीति की रूपरेखा तैयार, निशुल्क सेनेटरी पैड्स की उठी थी मांग",
        category: "NEWS",
    },
];



function OtherPoliticsNews() {
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.bottombordersty}></div>
                <div className={styles.homecontainer}>
                    <div className={styles.newscontainer}>
                        {newsData.map((item) => (
                            // <Link
                            //     to={`/nation/${item.id}`}
                            //     state={{ item }}
                            //     key={item.id}
                            //     className={styles.newsLink}
                            // >
                            <div key={item.id} className={styles.nationnews}>
                                <img src={item.image} className={styles.imgsty} alt="news" />
                                <div>
                                    <p className={styles.newstxtsty}>{item.title}</p>
                                    <p className={styles.btntxtsty}>{item.category}</p>
                                </div>
                            </div>
                            // </Link>
                        ))}
                    </div>
                    <div style={{ marginLeft: '60px' }}>
                        {/* <OtherSideNews /> */}
                    </div>
                </div>
                {/* <SwipeNationNews /> */}
                {/* <OtrerNationNews /> */}
            </div>
        </div>
    );
}

export default OtherPoliticsNews;
