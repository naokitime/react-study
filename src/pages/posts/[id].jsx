import Head from "next/head";
import styles from "../../styles/Home.module.css";
import { Header } from "../../components/Header";
import { usePost } from "src/hooks/usePost";
import { Post } from "src/components/Post";

const PostsId = () => {

  return (
    <div className={styles.container}>
      <Header />
      <Post/>
    </div>
  );
};

export default PostsId;
