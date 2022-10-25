const Detail = ({ users }) => {
  return (
    <>
      <h1>detail page</h1>
    </>
  );
};
export default Detail;
// export const getServerSideProps = async (context) => {
//   // Fetch data from external API
//   const res = await fetch(`https://.../data/${context.params.id}`);
//   const data = await res.json();

//   // Pass data to the page via props
//   return { props: { data } };
// };
