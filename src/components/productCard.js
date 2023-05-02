import styles from "../../styles/productCard.module.css";
import { useState } from "react";
import Image from "next/image";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import WhatsAppButton from "./whatsAppButton.js";

const ProductCard = ({ product }) => {
  const { name, price, image, info, productCategory } = product;
  const [showInfo, setShowInfo] = useState(false);
  const toggleInfo = () => {
    setShowInfo(!showInfo);
  };

  return (
    <div className={styles.card}>
      <Image fill className={styles.cardImage} src={image} alt={name} />
      <div className={styles.cardContent}>
        <h2 className={styles.cardName}>{name}</h2>
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
          {info}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
