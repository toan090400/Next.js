import Head from "next/head";
import { useState } from "react";
import axios from "axios";
//
import HomePage from "../components/Home/home";
import Search from "../components/Search/search";
import Layout from "../context/layout";
export default function Home({ data }) {
  const books = data.books;
  const [searchBook, setSearchBook] = useState({});
  const [loading, setLoading] = useState(false);
  const searchData = async (item) => {
    const search = await axios.get(
      `http://localhost:3000/api/books?search=${item}`
    );
    const searchData = search.data;
    setSearchBook(searchData);
    setLoading(searchData.success);
  };
  const status = async (item) => {
    setLoading(false);
    setSearchBook({});
  };
  return (
    <>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="Home Page" />
        <link rel="icon" href="/icon-1.jpg" />
      </Head>
      <Layout>
        <Search
          search={searchData}
          dataBooks={searchBook}
          loadingData={loading}
          loadnigStatus={status}
        />
        <HomePage bookData={books} />
      </Layout>
    </>
  );
}
export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api/books");
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};
