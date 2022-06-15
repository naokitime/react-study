import Head from "next/head";
import { Header } from "../../components/Header";
import { Comments as CommentsComponent } from "../../components/Comments";

const Comments = () => {
  return (
    <div>
      <Head>
        <title>Comment Page</title>
      </Head>
      <Header />
      <CommentsComponent />
    </div>
  );
};

export default Comments;
