import styles from "../../styles/socialMedia.module.css";
import { AiOutlineInstagram } from "react-icons/ai";
import Link from "next/link";

const SocialMedia = () => {
  return (
    <div>
      <div className={styles.container}>
        <AiOutlineInstagram className={styles.instaLogo} size={30} />
        <a
          className={styles.instaButton}
          href="https://www.instagram.com/lkbombay_defencecolony/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Follow us on Instagram
        </a>
      </div>
      <Link href="/blog" style={{ textDecoration: "none" }}>
        <h3 className={styles.blog}>Blog</h3>
      </Link>
    </div>
  );
};
export default SocialMedia;
