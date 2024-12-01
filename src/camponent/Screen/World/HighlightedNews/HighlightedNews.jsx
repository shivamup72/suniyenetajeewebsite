import React from 'react'
import Accimg from '../../../assest/greenadd.png'
import AccAdd from '../../../assest/Acc.png'
import jail from '../../../assest/jail.png'
import kamala from '../../../assest/kamala.png'
import biharimg from '../../../assest/bihar.png'
import styles from './highlightedNews.module.css'
import { Link } from 'react-router-dom'

const ads = [
    {
        imgSrc: jail,
        description: `जागरण संपादकीय: जरूरी है मुस्लिम 
जातियों की पहचान, झूठ को बेनकाब करने 
का समय`
    },
    {
        imgSrc: kamala,
        description: `जागरण संपादकीय: कमला हैरिस की हार से 
सबक ले कांग्रेस, बहुसंख्यकों की अनदेखी 
पर देना होगा ध्यान`
    },
    {
        imgSrc: biharimg,
        description: `Bihar Bypoll: 4 सीटों पर कौन करेगा खेल और कौन होगा फेल? अब होगी 'अग्निपरीक्षा'; कुशवाहा-वैश्य वोटरों पर नजर`
    }
];



function HighlightedNews() {
    return (
        <div className={styles.container}>
            <div className={styles.addcontainer}>
                <img src={Accimg} className={styles.addimgsty} alt="Main Advertisement" />
            </div>
            {ads.map((item, index) => (
                <div key={index} className={styles.itemconatiner}>
                    <Link
                        to={`/world/${item.id}`}
                        state={{ item }}
                        key={item.id}
                        className={styles.newsLink}
                    >
                        <img src={item.imgSrc} className={styles.imgsty} alt="Advertisement" />
                        <p className={styles.newstxtsty}>{item.description}</p>
                    </Link>
                </div>
            ))}
            <div className={styles.addcontainer}>
                <img src={AccAdd} className={styles.addimgsty} alt="Main Advertisement" />
            </div>
        </div>
    )
}

export default HighlightedNews;
