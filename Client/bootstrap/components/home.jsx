const Home = ({ data }) => {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="card mt-4 ml-4" style={{ width: "18rem" }}>
          <img src="..." className="card-img-top" alt="card" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
