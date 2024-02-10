import styles from "../../styles/productCard.module.css";
import { useState } from "react";
import Image from "next/image";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
// import WhatsAppButton from "./whatsAppButton.js";
// import WhatsAppButtonAdvance from "./whatsAppButtonAdvance.js";
import OrderCallButton from "./orderCallButton.js";

const ProductCard = ({ product }) => {
  const { name, price, image, info, size, productCategory } = product;
  const [showInfo, setShowInfo] = useState(true);
  const originalPrice = size ? price * size[0] : price;
  const discount = 20; //product price discount %
  const price1 = size ? price * size[0] * ((100 - discount) / 100) : price;
  const price2 = size ? price * size[1] * ((100 - discount) / 100) : price;
  const price3 = size ? price * size[2] * ((100 - discount) / 100) : price;
  const calculateDiscountedPrice = () => {
    const discountPercentage = discount / 100;
    return originalPrice - Math.round(originalPrice * discountPercentage);
  };
  const toggleInfo = () => {
    setShowInfo(!showInfo);
  };
  const infoWithPrice = info
    .replaceAll("price1", `${price1}`)
    .replaceAll("price2", `${price2}`)
    .replaceAll("price3", `${price3}`);
  const infoText = infoWithPrice
    .split("\n")
    .map((str) => <div key={str}>{str}</div>);
  const cardNames = name.split("\n").map((str) => <div key={str}>{str}</div>);

  return (
    <div className={styles.card}>
      <Image fill className={styles.cardImage} src={image} alt={name} />
      <div className={styles.cardContent}>
        <div className={styles.cardName}>{cardNames}</div>
        {/* <p className={styles.cardPrice}>₹{price}</p> */}
        <div className={styles.product}>
          <span className={styles.discountedPrice}>
            ₹ {calculateDiscountedPrice()}
          </span>
          <span className={styles.originalPrice}>₹ {originalPrice}</span>
          <span className={styles.discountPercentage}>{discount}% OFF</span>
        </div>
        {/* whatsapp impletation stoped due image sending issue */}
        {/* <WhatsAppButtonAdvance
          phoneNumber="+919315551966"
          productCategory={productCategory}
        /> */}
        <OrderCallButton></OrderCallButton>
        {/* implementation hidden with css */}
        <button className={styles.moreInfoButton} onClick={toggleInfo}>
          <FiChevronDown className={styles.moreInfoButtonIcon} />
          {showInfo ? "Less Product Info" : "More Product Info"}
        </button>
        <div
          className={`${styles.cardInfo} ${showInfo ? styles.cardExpand : ""}`}
        >
          <div>
            <span className={styles.discountPercentage}>{discount}% OFF</span>
          </div>
          <div className={styles.infoCardContainer}>{infoText}</div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
