import React, { useState } from "react";
import { FaBars, FaPhone, FaTimes } from "react-icons/fa";
import styles from "../../styles/header.module.css";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // <header className={styles.header}>
    <header>
      <div className={styles.header}>
        <div className={styles.brand}>
          <div>
            <Link
              style={{ textDecorationLine: "none" }}
              href="/"
              className={`${styles.brandTextMain}`}
            >
              L K BOMBAY <br />
              <p className={styles.brandText}>
                Since 1993 @ Defence colony, Delhi
              </p>
            </Link>
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
                  <a
                    style={{ color: "white", textDecorationLine: "none" }}
                    href="tel:01124333121"
                  >
                    +011 24333121
                  </a>
                </p>
                <p className={styles.header__nav_link}>
                  Phone call <FaPhone size={12} />{" "}
                  <a
                    style={{ color: "white", textDecorationLine: "none" }}
                    href="tel:919810948655"
                  >
                    +91 9810948655 / 9315551966
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
