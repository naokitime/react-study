import Head from "next/head";
import { useComment } from "src/hooks/useComment";
import { PostByCommentId } from "../Post/PostByCommentId";

export const CommentComponent = () => {
  const { data, error, isLoading } = useComment();

  if (isLoading) {
    return <div>ローディング中</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <Head>
        <title>{data?.name}</title>
      </Head>
      <div>
        <h1>{data?.body}</h1>
        <ul>
          <li>{data?.name}</li>
          <li>{data?.email}</li>
          <h2>元の記事</h2>
          <PostByCommentId id={data.postId} />
        </ul>
      </div>
    </div>
  );
};
