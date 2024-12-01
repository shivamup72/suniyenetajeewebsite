import React from 'react'
import Accimg from '../../../assest/greenadd.png'
import AccAdd from '../../../assest/Acc.png'
import jail from '../../../assest/education1.png'
import kamala from '../../../assest/education2.png'
import biharimg from '../../../assest/education3.png'
import education4 from '../../../assest/education4.png'

import styles from './SlideEducationNews.module.css'
import { Link } from 'react-router-dom'

const ads = [
    {
        id: 1,
        imgSrc: jail,
        description: `जागरण संपादकीय: जरूरी है मुस्लिम 
जातियों की पहचान, झूठ को बेनकाब करने 
का समय`
    },
    {
        id: 2,
        imgSrc: kamala,
        description: `जागरण संपादकीय: कमला हैरिस की हार से 
सबक ले कांग्रेस, बहुसंख्यकों की अनदेखी 
पर देना होगा ध्यान`
    },
    {
        id: 3,
        imgSrc: biharimg,
        description: `Bihar Bypoll: 4 सीटों पर कौन करेगा खेल और कौन होगा फेल? अब होगी 'अग्निपरीक्षा'; कुशवाहा-वैश्य वोटरों पर नजर`
    },
    {
        id: 4,
        imgSrc: education4,
        description: `Bihar Bypoll: 4 सीटों पर कौन करेगा खेल और कौन होगा फेल? अब होगी 'अग्निपरीक्षा'; कुशवाहा-वैश्य वोटरों पर नजर`
    }
];



function SlideEducationNews() {
    return (
        <div className={styles.container}>
            <div className={styles.addcontainer}>
                <img src={Accimg} className={styles.addimgsty} alt="Main Advertisement" />
                <img src={AccAdd} className={styles.addimgsty} alt="Main Advertisement" />
            </div>
            {ads.map((item, index) => (
                <Link
                    to={`/educationDetails/${item.id}`}
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
            <div className={styles.addcontainer}>
                <img src={Accimg} className={styles.addimgsty} alt="Main Advertisement" />
                <img src={AccAdd} className={styles.addimgsty} alt="Main Advertisement" />
            </div>
        </div>
    )
}

export default SlideEducationNews;
