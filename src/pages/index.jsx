import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Main } from "../components/Main";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

const Home = (props) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />

      <div className={styles.body}>
        {props.isShow ? <h1>{props.count}</h1> : null}
        <button className={styles.button} onClick={props.hadleClick}>
          ボタン
        </button>

        <button className={styles.button} onClick={props.handleDisplay}>
          {props.isShow ? "表示" : "非表示"}
        </button>

        <input type="text" value={props.text} onChange={props.handleChange} />
        <button className={styles.button} onClick={props.handleAdd}>
          追加
        </button>
        <ul>
          {props.array.map((item) => {
            return <li key={item}>{item}</li>;
          })}
        </ul>
      </div>

      <Main page="index" />
      <Footer />
    </div>
  );
};

export default Home;
