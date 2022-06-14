import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Main } from "../components/Main";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export default function About({
  doubleCount,
  isShow,
  hadleClick,
  handleDisplay,
  text,
  array,
  handleChange,
  handleAdd,
}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Abut Page</title>
      </Head>
      <Header />

      <div className={styles.body}>
        {isShow ? <h1>{doubleCount}</h1> : null}
        <button className={styles.button} onClick={hadleClick}>
          ボタン
        </button>
        <button className={styles.button} onClick={handleDisplay}>
          {isShow ? "表示" : "非表示"}
        </button>
        
        <input type="text" value={text} onChange={handleChange} />
        <button className={styles.button} onClick={handleAdd}>
          追加
        </button>
        <ul>
          {array.map((item) => {
            return <li key={item}>{item}</li>;
          })}
        </ul>
      </div>
      <Main page="about" />
      <Footer />
    </div>
  );
}
