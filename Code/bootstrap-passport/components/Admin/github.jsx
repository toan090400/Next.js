const Github = ({ githubData }) => {
  return (
    <div className="container mt-4">
      <table className="table mt-4">
        <thead>
          <tr>
            <th scope="col">githubId</th>
            <th scope="col">displayname</th>
            <th scope="col">username</th>
            <th scope="col">nodeId</th>
            <th scope="col">profileUrl</th>
            <th scope="col">photos</th>
          </tr>
        </thead>
        <tbody>
          {githubData.map((item) => {
            return (
              <tr key={item._id}>
                <td>{item.githubId}</td>
                <td>{item.displayname}</td>
                <td>{item.username}</td>
                <td>{item.nodeId}</td>
                <td>{item.profileUrl}</td>
                <td>{item.photos}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Github;
