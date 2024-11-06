import React from "react";
import styles from "./News.module.css";
import indvspak from "../../../assest/indvspak.png";
import gill from "../../../assest/gill.png";
import sauthafrica from "../../../assest/sauthafrica.png";
import pant from "../../../assest/pant.png";
import shubaman from "../../../assest/shubaman.png";
import line from "../../../assest/Line.png";
import help from "../../../assest/solve.png";

function News() {
  const newsData = [
    {
      imgSrc: gill,
      headline:
        "टीम इंडिया को पाकिस्तान बुलाने के लिए PCB ने चली नई चाल! BCCI के सामने रखी बड़ी पेशकश",
      newses:
        "India vs New Zealand 1st Test, Day 3 Highlights: बेंगलुरु के एम चिन्नास्वामी स्टेडियम में भारत और न्यूजीलैंड के बीच 3 मैचों की सीरीज का पहला टेस्ट खेला जा रहा है। न्यूजीलैंड ने भारत को पहली पारी में सिर्फ 46 रन पर समेटने के बाद 402 रन का विशाल स्कोर खड़ा कर दिया। इसके जवाब में खेल के तीसरे दिन टीम इंडिया ने जबरदस्त पलटवार किया ",
    },
    {
      imgSrc: sauthafrica,
      headline:
        "SA vs IND T20 Series 2024: 4 टी20 मैचों की सीरीज के लिए साउथ अफ्रीका जाएगी टीम इंडिया, 8 नवंबर को डरबन में पहला मैच",
    },
    {
      imgSrc: pant,
      headline:
        "Rishabh Pant IND vs NZ: ऋषभ पंत टीम इंडिया के लिए बैटिंग ऋषभ पंत के घुटने में चोट लगी थी. यह चोट उसी घुटने में लगी",
    },
  ];

  return (
    <div>
      <div>
        <img src={line} alt="News" className={styles.lineImage} />
      </div>
      <div className={styles.newsContainer}>
        {newsData.map((newsItem, index) => (
          <div key={index} className={styles.newsItem}>
            <div className={styles.newsimgsty}>
              <img
                src={newsItem.imgSrc}
                alt="News"
                className={styles.newsimg}
              />
            </div>
            <div className={styles.newsheadingcontainer}>
              <p className={styles.newheadingsty}>{newsItem.headline}</p>
              <p className={styles.newstxtsty}>{newsItem.newses}</p>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.flexContainer}>
        <div>
          <p className={styles.headlineText}>
            अगर आप है अपने छेत्रीय नेता से परेशान , चाहिए समाधान , तो आइये
          </p>
        </div>
        <div>
          <img src={help} alt="Help" className={styles.helpImage} />
        </div>
      </div>
    </div>
  );
}

export default News;
