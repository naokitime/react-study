import { useUser } from "src/hooks/useUser";
import { PosPostsByUserIdts } from "../Posts/PostsByUserId";

export const UserComponet = () => {
  const { data, error, isLoading } = useUser();

  if (isLoading) {
    return <div>Loading....</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <div>
        <h1>{data?.name}</h1>
        <h2>詳細</h2>
        <ul>
          <li>{data?.email}</li>
          <li>{data?.username}</li>
          <li>{data?.address.city}</li>
          <li>{data?.phone}</li>
          <li>{data?.website}</li>
          <li>{data?.company.name}</li>
        </ul>
        <h2>投稿</h2>
        <PosPostsByUserIdts id={data.id} />
      </div>
    </div>
  );
};
