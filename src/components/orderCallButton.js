import styles from "../../styles/whatsAppButton.module.css";

const OrderCallButton = () => {
  return (
    <a className={styles.button} href="tel:9315551966">
      Click to Place Order
    </a>
  );
};

export default OrderCallButton;
//   <button >Click to Place Order</button>;
