import Head from "next/head";
import LayoutAdmin from "../../components/Layout/Admin/Layout";
import DetailPage from "../../components/rooms/detail";
const Detail = () => {
  return (
    <>
      <Head>
        <title>detail</title>
      </Head>
      <LayoutAdmin>
        <DetailPage />
      </LayoutAdmin>
    </>
  );
};

export default Detail;
