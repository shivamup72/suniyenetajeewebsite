import React, { useState } from "react";
import line from "../../../assest/Line.png";
import anupma from "../../../assest/brekingimg1.png";
import cd from "../../../assest/brekingimg2.png";
import gill from "../../../assest/brekingimg3.png";
import indvspak from "../../../assest/brekingimg4.png";
import brekingimg5 from "../../../assest/brekingimg5.png";
import breking from "../../../assest/brekingimg.png";
import breking9 from "../../../assest/breking9.png";
import seemorenews from "../../../assest/seemore.png";
import arrowdwon from "../../../assest/arrowdwon.png";
import styles from "./BrekingNews.module.css";

const newsItems = [
    { imgSrc: anupma, text: "Lucknow News : शत्रु संपत्ति भवन में चल रहा होटल कबीला सील, कई और कब्जेदार भी रडार पर- 200 संपत्तियों का लिस्ट में नाम" },
    { imgSrc: breking, text: "Bareilly News: जातिगत अपमान से तंग आकर युवक ने की आत्महत्या, वीडियो बनाकर बयां किया था अपना दर्द" },
    { imgSrc: gill, text: "'55 हजार डॉलर दो नहीं तो बम से उड़ा देंगे', लखनऊ के 9 होटलों को बम से उड़ाने की धमकी- बाद में निकली अफवाह" },
    { imgSrc: indvspak, text: "Lakhpat Fort Kutch: अपने समय का कॉस्मोपॉलिटन सिटी, हर शख्स था लखपति… फिर कैसे बर्बाद हुआ बंदरगाह वाला शहर लखपत " },
    { imgSrc: brekingimg5, text: "Lucknow News : शत्रु संपत्ति भवन में चल रहा होटल कबीला सील, कई और कब्जेदार भी रडार पर- 200 संपत्तियों का लिस्ट में नाम" },
    { imgSrc: cd, text: "Bareilly News: जातिगत अपमान से तंग आकर युवक ने की आत्महत्या, वीडियो बनाकर बयां किया था अपना दर्द" },
    { imgSrc: breking9, text: "'55 हजार डॉलर दो नहीं तो बम से उड़ा देंगे', लखनऊ के 9 होटलों को बम से उड़ाने की धमकी- बाद में निकली अफवाह" },
    { imgSrc: indvspak, text: "Lakhpat Fort Kutch: अपने समय का कॉस्मोपॉलिटन सिटी, हर शख्स था लखपति… फिर कैसे बर्बाद हुआ बंदरगाह वाला शहर लखपत " },
    { imgSrc: gill, text: "'55 हजार डॉलर दो नहीं तो बम से उड़ा देंगे', लखनऊ के 9 होटलों को बम से उड़ाने की धमकी- बाद में निकली अफवाह" },
    { imgSrc: indvspak, text: "Lakhpat Fort Kutch: अपने समय का कॉस्मोपॉलिटन सिटी, हर शख्स था लखपति… फिर कैसे बर्बाद हुआ बंदरगाह वाला शहर लखपत " },
    { imgSrc: anupma, text: "Lucknow News : शत्रु संपत्ति भवन में चल रहा होटल कबीला सील, कई और कब्जेदार भी रडार पर- 200 संपत्तियों का लिस्ट में नाम" },
    { imgSrc: cd, text: "Bareilly News: जातिगत अपमान से तंग आकर युवक ने की आत्महत्या, वीडियो बनाकर बयां किया था अपना दर्द" },
    { imgSrc: gill, text: "'55 हजार डॉलर दो नहीं तो बम से उड़ा देंगे', लखनऊ के 9 होटलों को बम से उड़ाने की धमकी- बाद में निकली अफवाह" },
    { imgSrc: indvspak, text: "Lakhpat Fort Kutch: अपने समय का कॉस्मोपॉलिटन सिटी, हर शख्स था लखपति… फिर कैसे बर्बाद हुआ बंदरगाह वाला शहर लखपत " },
];

function BrekingNews() {
    const [showAll, setShowAll] = useState(false);

    const handleSeeMoreClick = () => {
        setShowAll(true);
    };

    return (
        <div>
            <div>
                <img src={line} alt="News" className={styles.lineImage} />
            </div>
            <div>
                <h4>More News</h4>
            </div>
            <div className={styles.newscontainer}>
                {(showAll ? newsItems : newsItems.slice(0, 7)).map((item, index) => (
                    <div
                        className={styles.trendingnewimgsty}
                        key={index}
                    >
                        <img
                            src={item.imgSrc}
                            className={styles.anumpaimgsty}
                            alt="News Thumbnail"
                        />
                        <div className={styles.newconsty}>
                            <p className={styles.newstxtsty}>
                                {item.text}
                            </p>
                        </div>
                    </div>
                ))}
                {!showAll && (
                    <div className={styles.seemoreContainer} onClick={handleSeeMoreClick}>
                        <img src={seemorenews} alt="More News" className={styles.anumpaimgsty} />
                        <p className={styles.seemoreText}>Read More news</p>
                        <img src={arrowdwon} alt="arrowdwon" className={styles.arrowstyles} />
                    </div>
                )}

            </div>
        </div>
    );
}

export default BrekingNews;
