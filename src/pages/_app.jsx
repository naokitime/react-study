import Head from "next/head";
import { Layout } from "src/components/Layout";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />;
      </Layout>
    </>
  );
};

export default MyApp;
