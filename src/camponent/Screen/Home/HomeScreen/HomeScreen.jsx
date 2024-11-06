import React from "react";
import styles from "./HomeScreen.module.css";
import modiji from "../../../assest/rahul.png";
import sinha from "../../../assest/sinhaji.png";
import appparty from "../../../assest/aamparty.png";
import salman from "../../../assest/salman.png";

function HomeScreen() {
  return (
    <div>
      <div className={styles.imgcontainer}>
        <div>
          <img src={modiji} alt="Banner" className={styles.modijiimgsty} />
          <p className={styles.textsty}>
            PM Modi Net Worth: 5 साल में कितनी बढ़ी पीएम मोदी की इनकम, कहां
            किया है कितना निवेश, Affidavit में बताई पूरी बात
          </p>
        </div>
        <div>
          <div>
            <img src={sinha} alt="Banner" className={styles.sinhajiimgsty} />
            <p className={styles.textstytwo}>
              India News: Latest India News, Read today's breaking news
              headlines in India
            </p>
          </div>
          <div>
            <img src={appparty} alt="Banner" className={styles.aamjiimgsty} />
            <p className={styles.textstytwo}>
              India News: Satendra Jain has been released to Jail
            </p>
          </div>
        </div>
      </div>
      {/* <div className={styles.salmanimgstycontainer}>
        <div>
          <img src={salman} alt="Banner" className={styles.salmaniimgsty} />
        </div>
        <p className={styles.salmantxtsty}>
          सलमान खान क्यों मांगे माफी, उसने किसी जानवर को नहीं मारा, लॉरेंस
          बिश्नोई पर भड़के एक्टर के पिता सलीम खान
        </p>
      </div> */}
    </div>
  );
}

export default HomeScreen;
