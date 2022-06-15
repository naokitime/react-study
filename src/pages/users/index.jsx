import Head from "next/head";
import { Header } from "../../components/Header";
import { Users as UsersComponent } from "src/components/Users";

const Users = () => {
  return (
    <div>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      <UsersComponent />
    </div>
  );
};

export default Users;
