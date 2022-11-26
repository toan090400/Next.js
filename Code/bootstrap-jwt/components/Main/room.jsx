import ReactPaginate from "react-paginate";
const Room = ({ roomData, Page, Page_Total, Total_Item, Click_Page }) => {
  const handlePageCick = async (data) => {
    const newPage = data.selected + 1;
    Click_Page(newPage);
  };
  return (
    <div className="container">
      <h1 className="mt-4">Total Item: {Total_Item}</h1>
      <h1 className="mt-4">
        Page: {Page}/{Page_Total}
      </h1>
      <div className="row">
        {roomData.map((item) => {
          return (
            <div
              key={item._id}
              className="card mt-4 ml-4"
              style={{ width: "18rem" }}
            >
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <nav className="mt-4" aria-label="Page navigation example">
        <ReactPaginate
          previousLabel="<< Previous"
          nextLabel="Next >>"
          breakLabel={"***"}
          pageCount={Page_Total}
          onPageChange={handlePageCick}
          marginPagesDisplayed={3}
          pageRangeDisplayed={3}
          containerClassName={"pagination"} //ul
          pageClassName={"page-item"} //li
          pageLinkClassName={"page-link"} //a
          previousClassName={"page-item"} // li Previous
          previousLinkClassName={"page-link"} // a Previous
          nextClassName={"page-item"} //li Next
          nextLinkClassName={"page-link"} // a Next
          breakClassName={"page-item"} // li breakLabel
          breakLinkClassName={"page-link"} // a breakLabel
          activeClassName={"active"} //li active
        />
        {/* <ul className="pagination">
          <li className="page-item">
            <a className="page-link" href="#">
              Previous
            </a>
          </li>
          <li className="page-item active">
            <a className="page-link " href="#">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              Next
            </a>
          </li>
        </ul> */}
      </nav>
    </div>
  );
};

export default Room;
