import React from "react";
import styles from "./Footer.module.css";
import logo from "../../assest/logo.png";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaMapMarkerAlt,
  // FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <img src={logo} alt="Suniye Neta Jee" className={styles.logo} />
        <p className={styles.description}>
          Suniye Neta Jee is a premier digital platform for local service
          businesses in India, offering expert services tailored to home, life,
          and personal needs, ensuring customized solutions for every user.
        </p>
        <div className={styles.socialIcons}>
          <a
            href="https://www.facebook.com/profile.php?id=61558219203497"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF className={styles.icon} />
          </a>
          <a
            href="https://www.instagram.com/suniyenetaje/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className={styles.icon} />
          </a>
          <a
            href="https://x.com/suniyenetajee"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className={styles.icon} />
          </a>
          <a
            href="https://www.youtube.com/@SuniyeNetaJee"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube className={styles.icon} />
          </a>
        </div>
      </div>
      <div className={styles.section}>
        <h2>Popular Cities News </h2>
        <div className={styles.categories}>
          <ul className={styles.categoryColumn}>
            <p>Noida</p>
            <p>Meerut</p>
            <p>NCR</p>
            <p>Lucknow</p>
            <p>Banarash</p>
          </ul>
        </div>
      </div>
      <div className={styles.section}>
        <h2>Reach US</h2>
        <p className={styles.contactItem}>
          <FaMapMarkerAlt className={styles.icon} />
          <span>Find us</span>
          <br />
          <a
            className={styles.linkApp}
            href="https://www.google.com/maps/place/CLICKNPAY+DIGITAL+SOLUTIONS+INDIA+PRIVATE+LIMITED/@28.6185232,77.3837492,15.25z/data=!4m14!1m7!3m6!1s0x390cef9db8c66a75:0x7180aeaabf5ce138!2sCLICKNPAY+DIGITAL+SOLUTIONS+INDIA+PRIVATE+LIMITED!8m2!3d28.6181126!4d77.3842054!16s%2Fg%2F11v0dd3h2c!3m5!1s0x390cef9db8c66a75:0x7180aeaabf5ce138!8m2!3d28.6181126!4d77.3842054!16s%2Fg%2F11v0dd3h2c?entry=ttu"
          >
            {" "}
            Noida Uttar Pradesh-244302
          </a>
        </p>
        {/* <p className={styles.contactItem}>
          <FaPhoneAlt className={styles.icon} />
          <span>Call Us</span>
          <br />
          <span className={styles.linkApp}>91-8579660665</span>
        </p> */}
        <p className={styles.contactItem}>
          <FaEnvelope className={styles.icon} />
          <span>Mail us</span>
          <br />
          <a
            className={styles.linkApp}
            href="mailto:clicknpay@suniyenetajee.com"
          >
            support@suniyenetajee.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
