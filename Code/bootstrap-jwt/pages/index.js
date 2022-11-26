import Head from "next/head";
import Rooms from "../components/Main/home";
const Home = ({ books }) => {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/icon-1.jpg" />
      </Head>
      <Rooms bookData={books} />
    </>
  );
};

export default Home;
export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api/books");
  const books = await res.json();
  return {
    props: {
      books,
    },
  };
};