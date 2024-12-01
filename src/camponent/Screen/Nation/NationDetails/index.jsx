import React, { useEffect } from "react";
import styles from './NationDetails.module.css'
import rahulgandhiji from "../../../assest/rahulgandhiji.png";
import digitalmarketing from '../../../assest/digitalmarketing.png'
import { useLocation, useParams } from "react-router-dom";
import OtherHeighlightNes from "./OtherHeighlightNes";
import TrendingNews from "./TrendingNews";
import banner from '../../../assest/nationadd.png'
import Add from "../../../common/Addvertiesment";

const heighlightNews = [
    { id: "1", text: "राहुल लोगों को भड़का रहे हैं, जो बेहद खतरनाक है: भाजपा" },
    { id: "2", text: "भाजपा ने कहा- राहुल के खिलाफ उचित कार्रवाई होनी चाहिए'" },
];
function NationDetails() {

    const { id } = useParams();
    const location = useLocation();
    const { item } = location.state || {};

    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top-left corner of the screen
    }, []);

    return (
        <div>
            <div className={styles.maincontainer}>
                <div>
                    <Add bannerImage={banner} />
                    <div className={styles.trendingnewscontainer}>
                        <div>
                            <div className={styles.homecontainer}>
                                <div>
                                    <div>
                                        {item.description ? <p className={styles.headingtxtsty}>{item.description}</p> :
                                            <p className={styles.headingtxtsty}>{item.title}</p>
                                        }
                                        <p className={styles.explainnewssty}>भाजपा ने चुनाव आयोग से पिछले सप्ताह मुंबई में दिए गए भाषण के एक हिस्से का हवाला देते हुए आदर्श आचार संहिता के घोर उल्लंघन
                                            के लिए राहुल गांधी के खिलाफ कार्रवाई करने की मांग की। सोमवार दोपहर चुनाव आयोग को लिखित शिकायत में भाजपा ने कहा कि
                                            राहुल गांधी ने अन्य राज्यों पर महाराष्ट्र राज्य से कथित अवसरों को चुराने और छीनने का झूठा आरोप लगाया है।</p>
                                        <div className={styles.newsimgcontainer}>
                                            <img src={rahulgandhiji} className={styles.imgsty} />
                                        </div>
                                        <div className={styles.heightlightcontainer}>
                                            <div className={styles.heighlightsty}>
                                                <p className={styles.headtxtsty}>HIGHLIGHTS</p>
                                            </div>
                                            {heighlightNews.map((item, index) => (
                                                <React.Fragment key={index}>
                                                    <div className={styles.newconsty}>
                                                        <p className={styles.indextxtsty}>{item.id}.</p>
                                                        <p className={styles.newstxtsty}>{item.text}</p>
                                                    </div>
                                                </React.Fragment>
                                            ))}
                                        </div>
                                        <div className={styles.newscontainer}>
                                            <p className={styles.explainnewssty}><span className={styles.headingnewssty}>डिजिटल डेस्क, नई दिल्ली।</span> महाराष्ट्र और झारखंड चुनाव से पहले भाजपा और कांग्रेस में जुबानी जंग तेज
                                                हो गई है। सोमवार को भाजपा ने चुनाव आयोग से कहा कि वह राहुल गांधी के द्वारा फैलाए जा रहे झूठ
                                                की निंदा करें और उनपर उचित कार्रवाई भी करें।</p>
                                            <p className={styles.explainnewssty}>केंद्रीय कानून मंत्री अर्जुन राम मेघवाल ने कहा कि चुनाव आयोग को अगले सप्ताह महाराष्ट्र में होने वाले
                                                चुनाव के लिए राहुल गांधी को "प्रचार के दौरान झूठ बोलने" पर फटकार लगानी चाहिए। उनकी निंदा
                                                करनी चाहिए और उन्हें भविष्य के लिए भी चेतावनी देनी चाहिए।</p>
                                            <p className={styles.headingnewssty2}>राहुल के आरोप बेबुनियाद</p>
                                            <p className={styles.explainnewssty}>उन्होंने कहा कि हमने चुनाव आयोग को बताया कि विपक्ष के नेता राहुल गांधी ने महाराष्ट्र में झूठ बोला है।
                                                राहुल गांधी बोलते हैं कि भाजपा संविधान को कुचलना चाहती है, यह पूरी तरह से बेबुनियाद आरोप है।
                                                केंद्रीय कानून मंत्री अर्जुन राम मेघवाल ने कहा कि 'एप्पल के आईफोन और बोइंग के हवाई जहाज महाराष्ट्र
                                                की कीमत पर अन्य राज्यों में बनाए जा रहे हैं' यह आरोप पूरी तरह से झूठ है। राहुल को नोटिस जारी
                                                होने के बाद भी वह लगातार इस तरह के बयान दे रहे हैं।</p>
                                        </div>
                                        <div>
                                            <img src={digitalmarketing} className={styles.digitalmarketing} />
                                        </div>
                                    </div>
                                </div>
                                <OtherHeighlightNes />
                            </div>
                        </div>
                        <TrendingNews />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NationDetails;

