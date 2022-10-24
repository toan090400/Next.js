import Head from "next/head";
import LayoutAdmin from "../../components/Layout/Admin/Layout";
import RoomsPage from "../../components/rooms/index";
const Rooms = () => {
  return (
    <>
      <Head>
        <title>Rooms</title>
      </Head>
      <LayoutAdmin>
        <RoomsPage />
      </LayoutAdmin>
    </>
  );
};

export default Rooms;
