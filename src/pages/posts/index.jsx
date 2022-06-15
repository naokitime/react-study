import Head from "next/head";
import styles from "../../styles/Home.module.css";
import { Header } from "../../components/Header";
import { Posts as PostsComponent } from "../../components/Posts";

const Posts = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      <PostsComponent />
    </div>
  );
};

export default Posts;
