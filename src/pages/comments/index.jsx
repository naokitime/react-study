import Head from "next/head";
import { Header } from "../../components/Header";
import { Comments as CommentsComponent } from "../../components/Comments";
import { SWRConfig } from "swr";

export const getStaticProps = async () => {
  const COMENTS_API_URL = `https://jsonplaceholder.typicode.com/comments`;
  const comments = await fetch(COMENTS_API_URL);
  const commentsData = await comments.json();

  return {
    props: {
      fallback: {
        [COMENTS_API_URL]: commentsData,
      },
    },
  };
};

const Comments = (props) => {
  const { fallback } = props;
  return (
    <div>
      <Head>
        <title>Comment Page</title>
      </Head>
      <SWRConfig value={{ fallback }}>
        <Header />
        <CommentsComponent />
      </SWRConfig>
    </div>
  );
};

export default Comments;
