const Home = ({ bookData }) => {
  const books = bookData.books;
  return (
    <div className="container mt-4">
      <div className="row">
        {books.map((item) => {
          return (
            <div
              key={item._id}
              className="card mt-4 ml-4"
              style={{ width: "18rem" }}
            >
              <img src="..." className="card-img-top" alt={item.name} />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
