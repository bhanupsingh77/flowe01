// components/DiscountNotification.js
import React, { useState } from "react";
import styles from "../../styles/notificationBar.module.css"; // Import external stylesheet

const NotificationBar = () => {
  const [isNotificationVisible, setNotificationVisibility] = useState(true);

  const hideNotification = () => {
    setNotificationVisibility(false);
  };

  return (
    <>
      {isNotificationVisible && (
        <div className={styles.notificationBar}>
          <p className={styles.content}>
            🎉 Special Offer: Site wide discount of 20% off on your purchase!
          </p>
          <button className={styles.closeButton} onClick={hideNotification}>
            &times;
          </button>
        </div>
      )}
    </>
  );
};

export default NotificationBar;
