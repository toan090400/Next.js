import Head from "next/head";
import LayoutMain from "../components/Layout/Main/Layout";
import HomePage from "../components/Home";
export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <LayoutMain>
        <HomePage />
      </LayoutMain>
    </>
  );
}
