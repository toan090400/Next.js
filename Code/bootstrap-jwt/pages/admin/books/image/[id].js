import Head from "next/head";
import axios from "axios";
import { useState, useContext } from "react";
import Image_Book from "../../../../components/Admin/books/image";
const Image = ({ book }) => {
  const bookId = book.book._id;
  // set up message
  const [message, setMessage] = useState();
  // create
  const create = async (item) => {
    try {
      const image = await item.image[0];
      console.log(image);
      const form = await new FormData();
      form.append("image", image);
      const book = await axios.patch(
        `http://localhost:3000/api/books/image/${bookId}`,
        form
      );
      const bookData = await book.data;
      setMessage(bookData);
    } catch (error) {
      console.log(error);
      const dataBook = error.response.data;
      setMessage(dataBook);
    }
  };

  return (
    <>
      <Head>
        <title>Image</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/icon-3.png" />
      </Head>
      <Image_Book messageData={message} createData={create} />
    </>
  );
};

export default Image;

export async function getStaticPaths() {
  const res = await fetch(`http://localhost:3000/api/books`);
  const data = await res.json();
  const book = data.books;
  const paths = book.map((item) => {
    return {
      params: { id: item._id },
    };
  });
  return {
    paths,
    fallback: false, // can also be true or 'blocking'
  };
}
export async function getStaticProps(context) {
  const item = context.params.id;
  const res = await fetch(`http://localhost:3000/api/books/${item}`);
  const book = await res.json();
  return {
    props: { book },
  };
}
