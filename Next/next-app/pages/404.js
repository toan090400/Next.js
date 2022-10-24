import Head from "next/head";
import LayoutMain from "../components/Layout/Main/Layout";
import NotFoundPage from "../components/404";
const NotFound = () => {
  return (
    <>
      <Head>
        <title>Error</title>
      </Head>
      <LayoutMain>
        <NotFoundPage />
      </LayoutMain>
    </>
  );
};

export default NotFound;
