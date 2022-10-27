import Head from "next/head";
import LayoutAdmin from "../../components/Layout/Main/Layout";
import RoomsPage from "../../components/rooms";
const Rooms = ({ users }) => {
  const test = (item) => {
    console.log(item);
  };
  return (
    <>
      <Head>
        <title>Rooms</title>
      </Head>
      <LayoutAdmin>
        <RoomsPage user={users} txt={test} />
      </LayoutAdmin>
    </>
  );
};

export default Rooms;
export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  return {
    props: {
      users,
    },
  };
};
