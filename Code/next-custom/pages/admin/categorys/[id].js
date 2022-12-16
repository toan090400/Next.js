import CategoryAdminDetailPage from "../../../components/Admin/Categorys/detail";
import LayoutAdmin from "../../../context/layoutAdmin";
import Message from "../../../components/Message/message";
//
import Head from "next/head";
import axios from "axios";
import { useState } from "react";
const Category = ({ category }) => {
  const categoryId = category.category._id;
  const [status, setStatus] = useState(false);
  const [message, setMessage] = useState({});
  const [getCategory, setCategory] = useState(category);
  const updateData = async (item) => {
    try {
      const categoryEdit = await axios.patch(
        `http://localhost:3000/api/categorys/${categoryId}`,
        item
      );
      setCategory(categoryEdit.data);
      setMessage(categoryEdit.data);
      setStatus(true);
    } catch (error) {
      console.log(error);
      const dataCategory = error.response.data;
      setStatus(true);
      setMessage(dataCategory);
    }
  };
  const setStatusMessage = (item) => {
    setStatus(item);
  };
  return (
    <>
      <Head>
        <title>Admin Category Edit: {getCategory.category.name}</title>
        <meta name="description" content="Admin Category Create" />
        <link rel="icon" href="/icon-4.png" />
      </Head>
      <LayoutAdmin>
        {status && (
          <Message
            setStatusDataTrue={status}
            setStatusDataFalse={setStatusMessage}
            messageData={message}
          />
        )}
        <CategoryAdminDetailPage
          categoryData={getCategory}
          updateData={updateData}
        />
      </LayoutAdmin>
    </>
  );
};

export default Category;
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
