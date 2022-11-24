import Head from "next/head";
import axios from "axios";
import { useState, useEffect } from "react";
import List_Category from "../../../components/Admin/categorys/list";
const Category = ({ categorys }) => {
  const [getMessage, setMessage] = useState();
  const [getStatus, setStatus] = useState(true);
  const [getCategorys, setCategorys] = useState(categorys);
  //get data
  useEffect(() => {
    const getAllCategorys = async () => {
      try {
        const getAllCategorys = await axios.get(
          "http://localhost:3000/api/categorys"
        );
        setCategorys(getAllCategorys.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllCategorys();
  }, [getStatus]);
  // delete
  const deleteItem = async (item) => {
    try {
      const itemId = await item._id;
      const deleteCategory = await axios.delete(
        `http://localhost:3000/api/categorys/${itemId}`
      );
      setMessage(deleteCategory.data);
      setStatus(!getStatus);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Head>
        <title>Category</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/icon-1.jpg" />
      </Head>
      <List_Category
        categoryData={getCategorys}
        deteteData={deleteItem}
        messageData={getMessage}
      />
    </>
  );
};

export default Category;
export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api/categorys");
  const categorys = await res.json();
  return {
    props: {
      categorys,
    },
  };
};
