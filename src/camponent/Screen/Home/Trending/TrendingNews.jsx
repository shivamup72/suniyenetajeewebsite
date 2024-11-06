import React, { useState } from "react";
import puspaimg1 from "../../../assest/puspa.png";
import puspaimg2 from "../../../assest/modiji.jpg";
import puspaimg3 from "../../../assest/sinhaji.png";
import line from "../../../assest/Line.png";
import anupma from "../../../assest/anupma.png";
import cd from "../../../assest/cd.png";
import gill from "../../../assest/shubaman.png";
import indvspak from "../../../assest/indvspak.png";


import styles from "./Trending.module.css";

const images = [
  {
    src: puspaimg1,
    text: "अल्लू अर्जुन की 'पुष्पा 2' में 'एनिमल' के एक्टर की एंट्री",
  },
  { src: puspaimg2, text: "अल्लू अर्जुन की 'पुष्पा 2'" },
  { src: puspaimg3, text: "अल्लू अर्जुन की 'पुष्पा 3'" },
];

const newsItems = [
  {
    imgSrc: anupma,
    name: "Anupama Twist",
    text: "अनुपमा में होगी इस पॉपुलर एक्ट्रेस की एंट्री, अनुज के बाद अनु की बनेगी सपोर्ट सिस्टम",
  },
  {
    imgSrc: cd,
    name: 'VVKWWV Collection Day 8',
    text: "विक्की-विद्या की 'सुहागरात की सीडी खोजते-खोजते निकले 8 दिन",
  },
  {
    imgSrc: gill,
    name:'Shubman Gill IND vs NZ',
    text: "भारत-न्यूजीलैंड टेस्ट से क्यों बाहर हुए शुभमन गिल? BCCI ने कर दिया खुलासा",
  },
  {
    imgSrc: indvspak,
    text: "टीम इंडिया को पाकिस्तान बुलाने के लिए PCB ने चली नई चाल! BCCI के सामने रखी बड़ी पेशकश ",
  },
];

function TrendingNews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div>
      <div>
        <img src={line} alt="News" className={styles.lineImage} />
      </div>
      <div className={styles.trendingNewsContainer}>
        <div className={styles.imageContainertwo}>
          {images.map((image, index) => (
            <div
              key={index}
              style={{ display: index === currentIndex ? "block" : "none" }}
            >
              <img
                src={image.src}
                alt={`Banner ${index}`}
                className={styles.puspaimgstyle}
              />
              <p className={styles.overlayText}>{image.text}</p>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.newscontainer}>
        {newsItems.map((item, index) => (
          <React.Fragment key={index}>
            <div className={styles.trendingnewimgsty}>
              <img
                src={item.imgSrc}
                className={styles.anumpaimgsty}
                alt="News Thumbnail"
              />
            </div>
            <div className={styles.newconsty}>
              <p className={styles.newstxtsty}>
                <span>{item.name}:</span> {item.text}
              </p>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default TrendingNews;
