const Google = ({ googleData }) => {
  return (
    <div className="container mt-4">
      <table className="table mt-4">
        <thead>
          <tr>
            <th scope="col">googleId</th>
            <th scope="col">displayname</th>
            <th scope="col">givenName</th>
            <th scope="col">familyName</th>
            <th scope="col">email</th>
            <th scope="col">image</th>
          </tr>
        </thead>
        <tbody>
          {googleData.map((item) => {
            return (
              <tr key={item._id}>
                <td>{item.googleId}</td>
                <td>{item.displayname}</td>
                <td>{item.givenName}</td>
                <td>{item.familyName}</td>
                <td>{item.email}</td>
                <td>{item.image}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Google;
