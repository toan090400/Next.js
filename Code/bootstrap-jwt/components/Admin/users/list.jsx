import Link from "next/link";
import Message from "../../Layout/message";
const User = ({ userData }) => {
  return (
    <div className="container mt-4">
      <Message />
      <table className="table mt-4">
        <thead>
          <tr>
            <th scope="col">First</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((item) => {
            return (
              <tr key={item._id}>
                <td>{item.username}</td>
                <td>
                  <button className="btn btn-danger">Delete User</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default User;
