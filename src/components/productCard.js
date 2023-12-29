import styles from "../../styles/productCard.module.css";
import { useState } from "react";
import Image from "next/image";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import WhatsAppButton from "./whatsAppButton.js";

const ProductCard = ({ product }) => {
  const { name, price, image, info, productCategory } = product;
  const [showInfo, setShowInfo] = useState(true);
  const toggleInfo = () => {
    setShowInfo(!showInfo);
  };

  const infoText = info.split("\n").map((str) => <div key={str}>{str}</div>);
  const cardNames = name.split("\n").map((str) => <div key={str}>{str}</div>);

  return (
    <div className={styles.card}>
      <Image fill className={styles.cardImage} src={image} alt={name} />
      <div className={styles.cardContent}>
        <div className={styles.cardName}>{cardNames}</div>
        <p className={styles.cardPrice}>{price}</p>
        <WhatsAppButton
          phoneNumber="+919315551966"
          productCategory={productCategory}
        />
        {/* implementation hidden with css */}
        <button className={styles.moreInfoButton} onClick={toggleInfo}>
          <FiChevronDown className={styles.moreInfoButtonIcon} />
          {showInfo ? "Less Product Info" : "More Product Info"}
        </button>
        <div
          className={`${styles.cardInfo} ${showInfo ? styles.cardExpand : ""}`}
        >
          <div className={styles.infoCardContainer}>{infoText}</div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
