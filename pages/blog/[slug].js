import Link from "next/link";
import { getAllPostIds, getPostData } from "../../utils/posts";
import Head from "next/head";
import styles from "../../styles/slug.module.css";

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.slug);
  return {
    props: {
      postData,
    },
  };
}

export default function PostPage({ postData }) {
  console.log({ postData });
  return (
    <>
      <div>
        <Head>
          <title>{postData.title}</title>
        </Head>
        <article className={styles.container}>
          <h1>{postData.title}</h1>
          <div>{postData.date}</div>
          <div
            className={styles.content}
            dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
          />
        </article>
      </div>
    </>
  );
}
