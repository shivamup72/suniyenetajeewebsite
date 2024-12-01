import React from 'react';
import styles from './OtherEducationNews.module.css';
import Frame from "../../../assest/Frame.png";
import line from "../../../assest/Line.png";
import addbanner from '../../../assest/nationadd.png';
import nationimg1 from '../../../assest/exam.png';
import tax from '../../../assest/result.png';
import shooter from '../../../assest/board.png';
import sainik from '../../../assest/cbse.png';
import upsssc from '../../../assest/upsssc.png';
import netresult from '../../../assest/netresult.png';
import { Link } from 'react-router-dom';

const newsData = [
    {
        id: 1,
        image: nationimg1,
        title: "CA Foundation and Inter January 2025 सेशन के लिए 23 नवंबर तक करें आवेदन, जानें अन्य डिटेल",
        category: "NEWS"
    },
    {
        id: 2,
        image: tax,
        title: "HP TET admit card 2024 OUT: हिमाचल प्रदेश शिक्षक पात्रता परीक्षा के लिए एडमिट कार्ड जारी, यहां से करें डाउनलोड",
        category: "NEWS"
    },
    {
        id: 3,
        image: shooter,
        title: "UGC NET December 2024: यूजीसी नेट दिसंबर एग्जाम नोटिफिकेशन जल्द हो सकता है जारी, इन स्टेप्स से स्वयं कर सकेंगे रजिस्ट्रेशन",
        category: "NEWS"
    },
    {
        id: 4,
        image: sainik,
        title: "'SSC JE 2024 Tier 2 Answer Key: एसएससी जेई टियर 2 पेपर आंसर-की रिलीज, 14 नवंबर तक दर्ज कराएं आपत्ति",
        category: "NEWS"
    },
    {
        id: 5,
        image: upsssc,
        title: "Delhi Home Guard: दिल्ली होम गार्ड भर्ती का फाइनल रिजल्ट हुआ घोषित, यहां से डाउनलोड करें कैटेगरी वाइज मेरिट लिस्ट",
        category: "NEWS"
    },
    {
        id: 6,
        image: netresult,
        title: "UPSSSC PET 2024: यूपीएसएसएससी पीईटी नोटिफिकेशन पर जल्द अपडेट आने की संभावना, पात्रता सहित अन्य डिटेल यहां से करें चेक",
        category: "NEWS"
    },
    {
        id: 5,
        image: upsssc,
        title: "Delhi Home Guard: दिल्ली होम गार्ड भर्ती का फाइनल रिजल्ट हुआ घोषित, यहां से डाउनलोड करें कैटेगरी वाइज मेरिट लिस्ट",
        category: "NEWS"
    },
    {
        id: 6,
        image: netresult,
        title: "UPSSSC PET 2024: यूपीएसएसएससी पीईटी नोटिफिकेशन पर जल्द अपडेट आने की संभावना, पात्रता सहित अन्य डिटेल यहां से करें चेक",
        category: "NEWS"
    },
    {
        id: 5,
        image: upsssc,
        title: "Delhi Home Guard: दिल्ली होम गार्ड भर्ती का फाइनल रिजल्ट हुआ घोषित, यहां से डाउनलोड करें कैटेगरी वाइज मेरिट लिस्ट",
        category: "NEWS"
    },


];


function OtherEducationNews() {
    return (
        <div>

            <div>
                {/* <div className={styles.bottombordersty}></div> */}
                {/* <div className={styles.homecontainer}> */}
                <div className={styles.topcontainer}>
                    <div className={styles.newscontainer}>
                        {newsData.map((item) => (
                            <Link
                                to={`/educationDetails/${item.id}`}
                                state={{ item }}
                                key={item.id}
                                className={styles.newsLink}
                            >
                                <div key={item.id} className={styles.nationnews}>
                                    <div className={styles.imgcontainer}>
                                        <img src={item.image} className={styles.imgsty} alt="item" />
                                    </div>
                                    <div>
                                        <p className={styles.newstxtsty}>{item.title}</p>
                                        <p className={styles.btntxtsty}>{item.category}</p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                    <div>
                    </div>
                </div>
            </div>
            {/* </div> */}
        </div>
    );
}

export default OtherEducationNews;

