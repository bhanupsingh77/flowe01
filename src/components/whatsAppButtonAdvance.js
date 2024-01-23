// components/WhatsAppButton.js
import React from "react";
import WhatsAppWidget from "react-whatsapp-widget";
import { FaWhatsapp } from "react-icons/fa";
import styles from "../../styles/whatsAppButton.module.css";

const WhatsAppButtonAdvance = ({
  phoneNumber,
  productName,
  productPrice,
  imageUrl,
}) => {
  const handleSendMessage = () => {
    const message = encodeURIComponent(
      `Hello! Check out this amazing product:\nProduct Name: ${productName}\nPrice: $${productPrice}\n${imageUrl}`
    );

    const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

    window.open(whatsappLink, "_blank");
  };

  return (
    <div>
      <button className={styles.button} onClick={handleSendMessage}>
        <FaWhatsapp className={styles.icon} />
        Send WhatsApp Message
      </button>
    </div>
  );
};

export default WhatsAppButtonAdvance;
