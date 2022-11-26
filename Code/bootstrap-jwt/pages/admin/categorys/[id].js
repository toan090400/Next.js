import Head from "next/head";
import axios from "axios";
import { useState, useContext } from "react";
import Edit_Category from "../../../components/Admin/categorys/edit";
const Edit = ({ category }) => {
  const name = category.category.name;
  const categoryId = category.category._id;
  const [categoryName, setCategoryName] = useState(name);
  const [message, setMessage] = useState();
  const [data, setData] = useState(category);
  const updateData = async (item) => {
    try {
      const categoryEdit = await axios.patch(
        `http://localhost:3000/api/categorys/${categoryId}`,
        item
      );
      setCategoryName(categoryEdit.data.category.name);
      setMessage(categoryEdit.data);
      setData(categoryEdit.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Head>
        <title>Edit: {categoryName}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/icon-4.png" />
      </Head>
      <Edit_Category
        Data={data}
        nameData={categoryName}
        messageData={message}
        editData={updateData}
      />
    </>
  );
};

export default Edit;
export async function getStaticPaths() {
  const res = await fetch(`http://localhost:3000/api/categorys`);
  const data = await res.json();
  const category = data.categorys;
  const paths = category.map((item) => {
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
  const res = await fetch(`http://localhost:3000/api/categorys/${item}`);
  const category = await res.json();
  return {
    props: { category },
  };
}