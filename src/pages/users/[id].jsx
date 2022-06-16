import { Header } from "../../components/Header";
import { UserComponet } from "src/components/User";
import { SWRConfig } from "swr";

export const getServerSideProps = async (ctx) => {
  const { id } = ctx.query;
  // ユーザー情報の取得
  const USER_API_URL = `https://jsonplaceholder.typicode.com/users/${id}`;
  const user = await fetch(USER_API_URL);
  const userData = await user.json();

  // ユーザーの投稿の取得
  const POSTS_API_URL = `https://jsonplaceholder.typicode.com/posts?userId=${userData.id}`;
  const Posts = await fetch(POSTS_API_URL);
  const PostsData = await Posts.json();

  return {
    props: {
      fallback: {
        [USER_API_URL]: userData,
        [POSTS_API_URL]: PostsData,
      },
    },
  };
};

const UserId = (props) => {
  const { fallback } = props;
  return (
    <SWRConfig value={{ fallback }}>
      <Header />
      <UserComponet />
    </SWRConfig>
  );
};

export default UserId;
