import React from 'react'
import chinapolice from '../../../assest/chinapolice.png'
import nationimg1 from '../../../assest/nationimg1.png';
import tax from '../../../assest/tax.png';
import shooter from '../../../assest/sooter.png';
import sainik from '../../../assest/sainik.png';
import styles from './WorldNews.module.css'
import { Link } from 'react-router-dom';

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
];

function WorldNews() {
  return (
    <div className={styles.container}>
      <div>
        <p className={styles.headingtxtsty}>China: स्पोर्ट्स सेंटर के बाहर कार ने लोगों को रौंदा, 35 की मौके पर मौत</p>
        <img src={chinapolice} alt='police img' className={styles.policeimgsty} />
      </div>
      <div className={styles.newscontainer}>
        {newsData.map((item) => (
          <Link
            to={`/world/${item.id}`}
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
    </div>
  )
}

export default WorldNews