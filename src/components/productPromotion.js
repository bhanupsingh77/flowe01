import Image from "next/image";
import styles from "../../styles/productPromotion.module.css";

function ProductPromotion() {
  return (
    <div className={styles.mainContaineer}>
      <div>
        <p className={styles.contactInfo}>
          Contact Us for order (Delhi NCR) phone/whatsApp
          <a className={styles.number} href="tel:919810948655">
            {" "}
            +91 9810948655/9315551966
          </a>{" "}
          Landline
          <a className={styles.number} href="tel:01124333121">
            {" "}
            +011 24333121
          </a>
        </p>
      </div>
      {/* promo banner */}
      {/* <div className={styles.container}>
        <Image
          className={styles.bannerImage}
          src={`/promo/Promo1.png`}
          alt={"promo banner"}
          fill
        />
      </div> */}
    </div>
  );
}

export default ProductPromotion;
