import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import TopHeader from "../TopHeader/TopHeader";

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
        <div className={styles.burgerIcon} onClick={handleBurgerClick}>
          {isOpen ? <FaTimes className={styles.icon} /> : <FaBars className={styles.icon} />}
        </div>

        {/* Navbar Links */}
        <div className={`${styles.navItems} ${isOpen ? styles.open : ""}`}>
          <ul className={styles.navLinks}>
            <Link to="/" style={{ textDecoration: "none" }} onClick={handleLinkClick}>
              <li>
                <p style={{ color: location.pathname === "/" ? "#ffb804" : "#000", fontWeight: '600' }}>Home</p>
              </li>
            </Link>
            <Link to="/politics" style={{ textDecoration: "none" }} onClick={handleLinkClick}>
              <li>
                <p style={{ color: location.pathname === "/politics" ? "#ffb804" : "#000", fontWeight: '600' }}>Politics</p>
              </li>
            </Link>
            <Link to="/breking" style={{ textDecoration: "none" }} onClick={handleLinkClick}>
              <li>
                <p style={{ color: location.pathname === "/breking" ? "#ffb804" : "#000", fontWeight: '600' }}>Breking</p>
              </li>
            </Link>
            <Link to="/sports" style={{ textDecoration: "none" }} onClick={handleLinkClick}>
              <li>
                <p style={{ color: location.pathname === "/sports" ? "#ffb804" : "#000", fontWeight: '600' }}>Sports</p>
              </li>
            </Link>
            <Link to="/contacts" style={{ textDecoration: "none" }} onClick={handleLinkClick}>
              <li>
                <p style={{ color: location.pathname === "/contacts" ? "#ffb804" : "#000", fontWeight: '600' }}>Accident</p>
              </li>
            </Link>
            <Link to="/privacy" style={{ textDecoration: "none" }} onClick={handleLinkClick}>
              <li>
                <p style={{ color: location.pathname === "/privacy" ? "#ffb804" : "#000", fontWeight: '600' }}>Social</p>
              </li>
            </Link>
            <Link to="/national" style={{ textDecoration: "none" }} onClick={handleLinkClick}>
              <li>
                <p style={{ color: location.pathname === "/national" ? "#ffb804" : "#000", fontWeight: '600' }}>Health</p>
              </li>
            </Link>
            <Link to="/privacy" style={{ textDecoration: "none" }} onClick={handleLinkClick}>
              <li>
                <p style={{ color: location.pathname === "/privacy" ? "#ffb804" : "#000", fontWeight: '600' }}>Religious</p>
              </li>
            </Link>
            <Link to="/national" style={{ textDecoration: "none" }} onClick={handleLinkClick}>
              <li>
                <p style={{ color: location.pathname === "/national" ? "#ffb804" : "#000", fontWeight: '600' }}>Astrology</p>
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
