import Link from "next/link";
const Rooms = ({ users }) => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="card mt-4 ml-4" style={{ width: "18rem" }}>
            <img src="/images/01.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <Link href="/">
                <a className="btn btn-primary">Go somewhere</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Rooms;
// export const getStaticProps = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   const users = await res.json();

//   return {
//     props: {
//       users,
//     },
//   };
// };
