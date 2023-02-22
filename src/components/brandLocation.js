import styles from "../../styles/brandLocation.module.css";

const BrandLocation = () => {
  return (
    <div className={styles.container}>
      <p className={styles.text}>Direction to Shop</p>
      <iframe
        className={styles.map}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d218.99352012255284!2d77.23046386021875!3d28.57287585964169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce25749c96d99%3A0xe90f621c8b59311a!2sL%20K%20Bombay%20Florist!5e0!3m2!1sen!2sin!4v1676826303503!5m2!1sen!2sin"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};
export default BrandLocation;
