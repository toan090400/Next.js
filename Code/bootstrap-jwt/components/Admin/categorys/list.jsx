import Link from "next/link";
import Message from "../../Layout/message";
const Category = ({ categoryData, deteteData, messageData }) => {
  const categorys = categoryData.categorys;
  const deleteHandelr = async (item) => {
    await deteteData(item);
  };
  return (
    <div className="container mt-4">
      <Link className="btn btn-primary mb-4" href="/admin/categorys/create">
        Create Category
      </Link>
      {messageData && <Message data={messageData} />}
      <table className="table mt-4">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Description</th>
            <th scope="col">User</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {categorys.map((item) => {
            return (
              <tr key={item._id}>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>{item.userId.username}</td>
                <td>
                  <Link
                    className="btn btn-warning"
                    href={`/admin/categorys/${item._id}`}
                  >
                    Edit Category
                  </Link>
                </td>
                <td>
                  <button
                    onClick={() => deleteHandelr(item)}
                    className="btn btn-danger"
                  >
                    Delete Category
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

export default Category;
