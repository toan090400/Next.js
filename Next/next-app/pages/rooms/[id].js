import Head from "next/head";
import LayoutAdmin from "../../components/Layout/Admin/Layout";
import DetailPage from "../../components/rooms/detail";
const Detail = (data) => {
  console.log(data);
  const detail = data.post.data;
  return (
    <>
      <Head>
        <title>detail</title>
      </Head>
      <LayoutAdmin>
        <DetailPage dataId={detail} />
      </LayoutAdmin>
    </>
  );
};

export default Detail;
// solution 1
// export const getServerSideProps = async (context) => {
//   // Fetch data from external API
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/users/${context.params.id}`
//   );
//   const data = await res.json();
//   // Pass data to the page via props
//   return { props: { data } };
// };
// solution 2
export async function getStaticPaths() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const data = await res.json();
  const paths = data.map((item) => {
    return {
      params: { id: item.id.toString() },
    };
  });
  // const ids = data.map((item) => item.id);
  // const paths = ids.map((id) => ({ params: { id: id.toString() } }));
  return {
    paths,
    fallback: false, // can also be true or 'blocking'
  };
}
export async function getStaticProps(context) {
  const item = context.params.id;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${item}`);
  const data = await res.json();
  return {
    props: { post: { data } },
  };
}
