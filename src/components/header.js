import React, { useState } from "react";
import { FaBars, FaHome, FaInfoCircle, FaPhone, FaTimes } from "react-icons/fa";
import styles from "../../styles/header.module.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // <header className={styles.header}>
    <header>
      <div className={styles.header}>
        <div className={styles.brand}>
          <div className={styles.header__logo}>
            <p className={styles.brandTextMain}>L K BOMBAY </p>
            <p className={styles.brandText}>
              Since 1990s @ Defence colony, Delhi
            </p>
          </div>
          <div
            className={styles.header__hamburger}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
          </div>
        </div>
        <div className={styles.header__navbar}>
          <nav
            className={`${
              isOpen ? styles.header__nav__open : styles.header__nav
            }`}
          >
            <ul className={styles.nav_style}>
              <li>
                <a href="#contact" className={styles.header__nav_link}>
                  Contact Us for order
                  <br /> (Delhi NCR)
                </a>
                <p className={styles.header__nav_link}>
                  Landline <FaPhone size={12} />{" "}
                  <a style={{ color: "white" }} href="tel:01124333121">
                    +011 24333121
                  </a>
                </p>
                <p className={styles.header__nav_link}>
                  Phone/whatsApp <FaPhone size={12} />{" "}
                  <a style={{ color: "white" }} href="tel:919810948655">
                    +91 9810948655
                  </a>
                </p>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
