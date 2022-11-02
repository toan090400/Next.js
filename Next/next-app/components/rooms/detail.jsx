const Detail = ({ dataId }) => {
  return (
    <>
      <h1>{dataId.id}</h1>
      <h1>{dataId.name}</h1>
      <h1>{dataId.username}</h1>
    </>
  );
};
export default Detail;
