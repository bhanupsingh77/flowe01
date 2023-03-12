import styles from "../../styles/socialMedia.module.css";

const SocialMedia = () => {
  return (
    <div className={styles.container}>
      <a
        className={styles.instaButton}
        href="https://www.instagram.com/lkbombay_defencecolony/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Follow us on Instagram
      </a>
    </div>
  );
};
export default SocialMedia;
