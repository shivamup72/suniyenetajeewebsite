import React from "react";
import line from "../../../assest/bottomborder.png";
import anupma from "../../../assest/image1.png";
import cd from "../../../assest/image2.png";
import gill from "../../../assest/image3.png";
import image4 from "../../../assest/image4.png";
import image5 from "../../../assest/image5.png";
import image6 from "../../../assest/image6.png";
import image7 from "../../../assest/image7.png";

import styles from "./Cotegory.module.css";
import { Link } from "react-router-dom";

const newsItems = [
  { imgSrc: anupma, text: "Lucknow News : शत्रु संपत्ति भवन में चल रहा होटल कबीला सील, कई और कब्जेदार भी रडार पर- 200 संपत्तियों का लिस्ट में नाम" },
  { imgSrc: cd, text: "Bareilly News: जातिगत अपमान से तंग आकर युवक ने की आत्महत्या, वीडियो बनाकर बयां किया था अपना दर्द" },
  { imgSrc: gill, text: "'55 हजार डॉलर दो नहीं तो बम से उड़ा देंगे', लखनऊ के 9 होटलों को बम से उड़ाने की धमकी- बाद में निकली अफवाह" },
];

const newsItems2 = [
  { imgSrc: image4, text: "Lucknow News : शत्रु संपत्ति भवन में चल रहा होटल कबीला सील, कई और कब्जेदार भी रडार पर- 200 संपत्तियों का लिस्ट में नाम" },
  { imgSrc: image5, text: "Bareilly News: जातिगत अपमान से तंग आकर युवक ने की आत्महत्या, वीडियो बनाकर बयां किया था अपना दर्द" },
  { imgSrc: image6, text: "'55 हजार डॉलर दो नहीं तो बम से उड़ा देंगे', लखनऊ के 9 होटलों को बम से उड़ाने की धमकी- बाद में निकली अफवाह" },
];

const newsItems3 = [
  { imgSrc: image7, text: "Lucknow News : शत्रु संपत्ति भवन में चल रहा होटल कबीला सील, कई और कब्जेदार भी रडार पर- 200 संपत्तियों का लिस्ट में नाम" },
  { imgSrc: cd, text: "Bareilly News: जातिगत अपमान से तंग आकर युवक ने की आत्महत्या, वीडियो बनाकर बयां किया था अपना दर्द" },
  { imgSrc: gill, text: "'55 हजार डॉलर दो नहीं तो बम से उड़ा देंगे', लखनऊ के 9 होटलों को बम से उड़ाने की धमकी- बाद में निकली अफवाह" },
];

function CategoryNews() {
  return (
    <div className={styles.container}>
      <div>
        <div>
          <img src={line} alt="News" className={styles.lineImage} />
          <img src={line} alt="News" className={styles.lineImage2} />
        </div>

        <div className={styles.categoriesRow}>
          <div className={styles.categorySection}>
            <p className={styles.headingtxtsty}>क्रिकेट</p>
            {newsItems.map((item, index) => (
              <Link
                to={`/news/${index}`}
                state={{ item }}
                key={index}
                className={styles.newsLink}
              >
                <div key={index} className={styles.newsItem}>
                  <img src={item.imgSrc} alt="News item" className={styles.newsImage} />
                  <p className={styles.newtxtsty}>{item.text}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className={styles.categorySection}>
            <p className={styles.headingtxtsty}>बिजनेस</p>
            {newsItems2.map((item, index) => (
              <Link
                to={`/news/${index}`}
                state={{ item }}
                key={index}
                className={styles.newsLink}
              >
                <div key={index} className={styles.newsItem}>
                  <img src={item.imgSrc} alt="News item" className={styles.newsImage} />
                  <p className={styles.newtxtsty}>{item.text}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className={styles.categorySection}>
            <p className={styles.headingtxtsty}>शिक्षा</p>
            {newsItems3.map((item, index) => (
              <Link
                to={`/news/${index}`}
                state={{ item }}
                key={index}
                className={styles.newsLink}
              >
                <div key={index} className={styles.newsItem}>
                  <img src={item.imgSrc} alt="News item" className={styles.newsImage} />
                  <p className={styles.newtxtsty}>{item.text}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div >
  );
}

export default CategoryNews;