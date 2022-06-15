import Head from "next/head";
import { Header } from "../components/Header";

const Index = () => {
  return (
    <div>
      <Head>
        <title>Abut Page</title>
      </Head>
      <Header />
      <h1>Next.jsで学ぶReact講座</h1>
      <p>JSONPlaecholderのAPIを色々叩いてみるよ!</p>
    </div>
  );
};
export default Index;
