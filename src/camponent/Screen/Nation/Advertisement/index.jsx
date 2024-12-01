import React from 'react'
import Accimg from '../../../assest/Acc.png'
import sscimg from '../../../assest/ssc.png'
import biharimg from '../../../assest/bihar.png'

import styles from './Advertisement.module.css'
import { Link } from 'react-router-dom'

const ads = [
    {
        imgSrc: sscimg,
        description: "SSC CHSL Tier 2 Admit Card: एसएससी सीएचएसएल टियर-2 एग्जाम के लिए एडमिट कार्ड जारी, यहां दिए डायरेक्ट लिंक से करें डाउनलोड"
    },
    {
        imgSrc: biharimg,
        description: "Bihar Bypoll: 4 सीटों पर कौन करेगा खेल और कौन होगा फेल? अब होगी 'अग्निपरीक्षा'; कुशवाहा-वैश्य वोटरों पर नजर"
    }
];


function Advertisement() {
    return (
        <div className={styles.container}>
            <div className={styles.addcontainer}>
                <img src={Accimg} className={styles.addimgsty} alt="Main Advertisement" />
            </div>
            {ads.map((item, index) => (
                <Link
                    to={`/nation/${item.id}`}
                    state={{ item }}
                    key={item.id}
                    className={styles.newsLink}
                >
                    <div key={index} className={styles.itemconatiner}>
                        <img src={item.imgSrc} className={styles.imgsty} alt="Advertisement" />
                        <p className={styles.newstxtsty}>{item.description}</p>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default Advertisement;
