import React, { useState, useEffect } from "react";
import styles from "../../styles/productPromotion.module.css";

const texts = ["Valentine Day", "Anniversary", "Birthday"];

function ProductPromotion() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % texts.length);
    }, 2000);
    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <div className={styles.container}>
      <h1 className={styles.fixed_text}>Flowers for Loved Ones. Order Now !</h1>
      <h1 className={styles.changing_text}>{texts[currentIndex]}</h1>
    </div>
  );
}

export default ProductPromotion;
