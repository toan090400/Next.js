import Link from "next/link";
const Rooms = ({ user }) => {
  // console.log(data);
  // const demo = () => {
  //   // console.log("demo run");
  //   data.txt("toi la con ga");
  // };
  return (
    <>
      <div className="container">
        <div className="row">
          {user.map((item) => {
            return (
              <div
                key={item.id}
                className="card mt-4 ml-4"
                style={{ width: "18rem" }}
              >
                <img src="/images/01.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <Link href={`/rooms/${item.id}`}>
                    <a className="btn btn-primary">Go somewhere</a>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* <h1>rooms page</h1>
      <h1 onClick={demo}>click</h1> */}
    </>
  );
};

export default Rooms;
