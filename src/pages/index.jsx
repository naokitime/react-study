import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Main } from "../components/Main";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { useCounter } from "src/hooks/useCounter";
import { useInputArray } from "src/hooks/useInputArray";
import { useBgLightBlue } from "src/hooks/useBgLightBlue";

export default function Home() {
  const { count, isShow, hadleClick, handleDisplay } = useCounter();
  const { text, array, handleChange, handleAdd } = useInputArray();
  useBgLightBlue();

  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />

      {isShow ? <h1>{count}</h1> : null}
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

      <Main page="index" />
      <Footer />
    </div>
  );
}
