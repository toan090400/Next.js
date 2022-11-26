import Link from "next/link";
import Message from "../../Layout/message";
const Book = ({ bookData, deteteData, messageData }) => {
  const books = bookData.books;
  const deleteHandelr = async (item) => {
    await deteteData(item);
  };
  return (
    <div className="container mt-4">
      <Link className="btn btn-primary mb-4" href="/admin/books/create">
        Create Book
      </Link>
      {messageData && <Message data={messageData} />}
      <table className="table mt-4">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Description</th>
            <th scope="col">categoryId</th>
            <th scope="col">UserId</th>
            <th scope="col">Edit</th>
            <th scope="col">Image</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {books.map((item) => {
            return (
              <tr key={item._id}>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>
                  {item.categoryId.map((item) => {
                    return <p key={item._id}>{item.name}</p>;
                  })}
                </td>
                <td>{item.userId.username}</td>
                <td>
                  <Link
                    className="btn btn-warning"
                    href={`/admin/books/${item._id}`}
                  >
                    Edit Book
                  </Link>
                </td>
                <td>
                  <Link
                    className="btn btn-warning"
                    href={`/admin/books/image/${item._id}`}
                  >
                    Image Book
                  </Link>
                </td>
                <td>
                  <button
                    onClick={() => deleteHandelr(item)}
                    className="btn btn-danger"
                  >
                    Delete Book
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Book;
