import React, { useRef } from "react";
import ImageAssets from "../../../assest/sharad.png";
import functionimg from "../../../assest/function.png";
import nitinimg from "../../../assest/nitin.png";
import meravate4 from '../../../assest/meravate4.webp'

import styles from "./Vote.module.css";

const Vote = () => {
  const scrollRef = useRef(null);

  return (
    <div>


      <div className={styles.newswomancontainer}>
        <div className={styles.newswomanbottomImages} ref={scrollRef}>
          <div className={styles.newswomanbottomImage}>
            <img src={ImageAssets} alt="womanvote" />
            <p>
              महाविकास अघाड़ी में 260 सीटों पर सहमति! इन सीटों पर अब भी फंसा पेंच
            </p>
          </div>
          <div className={styles.newswomanbottomImage}>
            <img src={functionimg} alt="youthvote" />
            <p>
              UP By Poll 2024: सीसामऊ सीट पर सपा के खिलाफ BJP का प्रत्याशी कौन?
            </p>
          </div>
          <div className={styles.newswomanbottomImage}>
            <img src={nitinimg} alt="rajthanvote" />
            <p>
              India News | Latest News in India | Today India News Headlines |
              Republic World
            </p>
          </div>
        </div>
      </div>
      <div className={styles.newswomanmainImage}>
        <img src={meravate4} alt="Newswoman" className={styles.womanimage} />
      </div>
    </div>
  );
};

export default Vote;
