import Link from "next/link";
const User = () => {
  return (
    <div className="container mt-4">
      <Link className="btn btn-primary" href="/admin/Users/create">
        Create User
      </Link>
      {/* ------------- */}
      <div
        className="alert alert-warning alert-dismissible fade show mt-4"
        role="alert"
      >
        You should check in on some of those fields below.
        <button
          type="button"
          className="close"
          data-dismiss="alert"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      {/* ------------- */}
      <table className="table mt-4">
        <thead>
          <tr>
            <th scope="col">First</th>
            <th scope="col">Handle</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mark</td>
            <td>
              <p>1</p>
              <p>2</p>
              <p>3</p>
            </td>
            <td>@mdo</td>
            <td>
              <Link className="btn btn-warning" href="/admin/Users">
                Edit User
              </Link>
            </td>
            <td>
              <button className="btn btn-danger" href="/admin/Users">
                Delete User
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default User;
