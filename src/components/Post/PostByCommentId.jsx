import Link from "next/link";
import { usePost } from "src/hooks/usePost";
import { CommentsByPostId } from "../Comments/CommentsByPostsId";
import { UserByUserId } from "../User/UserByUserId";

export const PostByCommentId = (props) => {
  const { data, error, isLoading } = usePost(props.id);

  if (isLoading) {
    return <div>ローディング中</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <Link href={`/posts/${data?.id}`}>
        <a>{data?.title}</a>
      </Link>
    </div>
  );
};
