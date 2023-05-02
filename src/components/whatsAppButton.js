import { FaWhatsapp } from "react-icons/fa";
import styles from "../../styles/whatsAppButton.module.css";

const WhatsAppButton = ({ phoneNumber, productCategory }) => {
  const handleClick = () => {
    const message = `Hi, I'm interested in Ordering a ${productCategory}.`;
    const encodedMessage = encodeURIComponent(message);
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
    window.open(url, "_blank");
  };

  return (
    <button className={styles.button} onClick={handleClick}>
      <FaWhatsapp className={styles.icon} />
      Contact on WhatsApp
    </button>
  );
};

export default WhatsAppButton;
