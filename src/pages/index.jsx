import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Header } from "../components/Header";

const Index = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Abut Page</title>
      </Head>
      <Header />
      <h1>Next.jsで学ぶReact講座</h1>
      <p>JSONPlaecholderのAPIを色々叩いてみるよ！</p>
    </div>
  );
};
export default Index;
