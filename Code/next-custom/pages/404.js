import Head from "next/head";
//
import ErrorPage from "../components/Error/error";
const Error = () => {
  return (
    <>
      <Head>
        <title>Error</title>
        <meta name="description" content="Error" />
        <link rel="icon" href="/icon-1.jpg" />
      </Head>
      <ErrorPage />
    </>
  );
};
export default Error;
