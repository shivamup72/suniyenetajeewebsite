import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import TopHeader from "../TopHeader/TopHeader";
import Suniye from '../../assest/Suniye.png';
import Neta from '../../assest/NetaJee.png';
import logo from '../../assest/logo.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Toggle the navbar open/close state
  const handleBurgerClick = () => {
    setIsOpen(!isOpen);
  };

  // Close the navbar when a link is clicked
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <div >
      <TopHeader />
      <nav className={styles.navbar}>
        <div className={styles.netajiimgsty}>
          <div className={styles.heddenimg}>
            <img src={Suniye} alt="Suniye" className={styles.netajitxtsty} />
            <img src={Neta} alt="Neta" className={styles.netasty} />
          </div>
        </div>

        <div className={styles.burgerIcon} onClick={handleBurgerClick}>
          {isOpen ? <FaTimes className={styles.icon} /> : <FaBars className={styles.icon} />}
        </div>

        {/* Navbar Links */}
        <div className={`${styles.navItems} ${isOpen ? styles.open : ""}`}>
          <ul className={styles.navLinks}>
            <Link to="/" style={{ textDecoration: "none" }} onClick={handleLinkClick}>
              <li>
                <p style={{ color: location.pathname === "/" ? "#ffb804" : "#000", fontWeight: '600' }}>HOME</p>
              </li>
            </Link>
            <Link to="/breking" style={{ textDecoration: "none" }} onClick={handleLinkClick}>
              <li>
                <p style={{ color: location.pathname === "/breking" ? "#ffb804" : "#000", fontWeight: '600' }}>BREKING</p>
              </li>
            </Link>
            <Link to="/politicsNews" style={{ textDecoration: "none" }} onClick={handleLinkClick}>
              <li>
                <p style={{ color: location.pathname === "/politicsNews" ? "#ffb804" : "#000", fontWeight: '600' }}>POLITICAL</p>
              </li>
            </Link>
            <Link to="/education" style={{ textDecoration: "none" }} onClick={handleLinkClick}>
              <li>
                <p style={{ color: location.pathname === "/education" ? "#ffb804" : "#000", fontWeight: '600' }}>EDUCATION</p>
              </li>
            </Link>
            <Link to="/entertainment" style={{ textDecoration: "none" }} onClick={handleLinkClick}>
              <li>
                <p style={{ color: location.pathname === "/entertainment" ? "#ffb804" : "#000", fontWeight: '600' }}>ENTERTAINMENT</p>
              </li>
            </Link>
            <Link to="/sports" style={{ textDecoration: "none" }} onClick={handleLinkClick}>
              <li>
                <p style={{ color: location.pathname === "/sports" ? "#ffb804" : "#000", fontWeight: '600' }}>SPORTS</p>
              </li>
            </Link>
            <Link to="/nation" style={{ textDecoration: "none" }} onClick={handleLinkClick}>
              <li>
                <p style={{ color: location.pathname === "/nation" ? "#ffb804" : "#000", fontWeight: '600' }}>NATION</p>
              </li>
            </Link>
            <Link to="/world" style={{ textDecoration: "none" }} onClick={handleLinkClick}>
              <li>
                <p style={{ color: location.pathname === "/world" ? "#ffb804" : "#000", fontWeight: '600' }}>WORLD</p>
              </li>
            </Link>


          </ul>
        </div>
      </nav>

      {/* Overlay for mobile view */}
      {isOpen && <div className={`${styles.overlay} ${isOpen ? styles.open : ""}`} onClick={handleLinkClick}></div>}
    </div>
  );
};

export default Navbar;
