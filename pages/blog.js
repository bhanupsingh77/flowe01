import { getSortedPostsData } from "../utils/posts.js";
import styles from "../styles/blog.module.css";
import Link from "next/link";

const Blog = ({ allPostsData }) => {
  return (
    <div className={styles.container}>
      {allPostsData.map(({ slug, date, title }) => (
        <div key={slug}>
          <li>
            <Link style={{ textDecorationLine: "none" }} href={`/blog/${slug}`}>
              {title}
            </Link>
            <br />
            {date}
          </li>
        </div>
      ))}
    </div>
  );
};
export default Blog;

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
