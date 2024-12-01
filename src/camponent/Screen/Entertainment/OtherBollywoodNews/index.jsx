import React from 'react';
import styles from './OtherBollywoodNews.module.css';
import Bollywood1 from '../../../assest/Bollywood1.png';
import Bollywood2 from '../../../assest/Bollywood2.png';
import Bollywood3 from '../../../assest/Bollywood3.png';
import Bollywood4 from '../../../assest/Bollywood4.png';
import Bollywood5 from '../../../assest/Bollywood5.png';
import { Link } from 'react-router-dom';



function OtherBollywoodNews() {
    const sportsNews = [
        { id: 1, title: 'रिलेशनशिप में क्या होता है Soft Launch और Hard Launch का मतलब, Gen Z की लव लाइफ में खूब चल रहा इसका ट्रेंड', image: Bollywood1 },
        { id: 2, title: 'शादी करने वाले हैं नेहा कक्कड़ के Ex ब्वॉयफ्रेंड Himansh Kohli, छुपाके रखा होने वाली दुल्हन का नाम', image: Bollywood4 },
        { id: 3, title: 'बुरा फंसे Ram Gopal Varma, मुख्यमंत्री चंद्रबाबू नायडू की गलत फोटो इस्तेमाल करने पर दर्ज हुई FIR', image: Bollywood5 },
        { id: 4, title: 'Amitabh Bachchan ने निमरत कौर की तारीफ करते हुए उन्हें भेजा था हाथ से लिखा लेटर, घर भिजवाए थे फूल', image: Bollywood2 },
        { id: 5, title: 'AWES Admit Card 2024: आर्मी पब्लिक स्कूल ऑनलाइन स्क्रीनिंग टेस्ट के लिए एडमिट कार्ड जारी, 23-24 नवंबर को होना है एग्जाम', image: Bollywood3 },
        { id: 6, title: 'शादी करने वाले हैं नेहा कक्कड़ के Ex ब्वॉयफ्रेंड Himansh Kohli, छुपाके रखा होने वाली दुल्हन का नाम', image: Bollywood4 },

    ];

    const internationalNews = [
        { id: 1, title: 'रिलेशनशिप में क्या होता है Soft Launch और Hard Launch का मतलब, Gen Z की लव लाइफ में खूब चल रहा इसका ट्रेंड', image: Bollywood3 },
        { id: 2, title: 'शादी करने वाले हैं नेहा कक्कड़ के Ex ब्वॉयफ्रेंड Himansh Kohli, छुपाके रखा होने वाली दुल्हन का नाम', image: Bollywood2 },
        { id: 3, title: 'बुरा फंसे Ram Gopal Varma, मुख्यमंत्री चंद्रबाबू नायडू की गलत फोटो इस्तेमाल करने पर दर्ज हुई FIR', image: Bollywood4 },
        { id: 4, title: 'Amitabh Bachchan ने निमरत कौर की तारीफ करते हुए उन्हें भेजा था हाथ से लिखा लेटर, घर भिजवाए थे फूल', image: Bollywood3 },
        { id: 5, title: 'शादी करने वाले हैं नेहा कक्कड़ के Ex ब्वॉयफ्रेंड Himansh Kohli, छुपाके रखा होने वाली दुल्हन का नाम', image: Bollywood4 },
        { id: 6, title: 'AWES Admit Card 2024: आर्मी पब्लिक स्कूल ऑनलाइन स्क्रीनिंग टेस्ट के लिए एडमिट कार्ड जारी, 23-24 नवंबर को होना है एग्जाम', image: Bollywood5 },
    ];

    // const BusinessNews = [
    //     { id: 1, title: 'self reliance in chitwan fish production', image: unsplash },
    //     { id: 2, title: 'the number of tourist arrivals in chitwan was zero last fiscal year', image: river },
    //     { id: 3, title: 'farmers return to native paddy', image: field },
    // ];

    return (
        <div className={styles.container}>
            <div className={styles.newsrows}>
                <div className={styles.itemcontainer}>
                    {sportsNews.map((item) => (
                        <Link
                            to={`/entertainment/${item.id}`}
                            state={{ item }}
                            key={item.id}
                            className={styles.newsLink}
                        >
                            <div key={item.id} className={styles.newscontainer}>
                                <div className={styles.imgcontainer}>
                                    <img src={item.image} alt="sport" className={styles.imgsty} />
                                </div>
                                <div>
                                    <p className={styles.newstxtsty}>{item.title}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                <div>
                    <div className={styles.itemcontainer}>
                        {internationalNews.map((item) => (
                            <Link
                                to={`/entertainment/${item.id}`}
                                state={{ item }}
                                key={item.id}
                                className={styles.newsLink}
                            >
                                <div key={item.id} className={styles.newscontainer}>
                                    <div className={styles.imgcontainer}>
                                        <img src={item.image} alt="international" className={styles.imgsty} />
                                    </div>
                                    <div>
                                        <p className={styles.newstxtsty}>{item.title}</p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OtherBollywoodNews;
