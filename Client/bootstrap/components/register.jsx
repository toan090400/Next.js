const Register = () => {
  return (
    <div className="container mt-4">
      <h1>Register page</h1>
      {/* ------------------------------ */}
      <div
        className="alert alert-warning alert-dismissible fade show"
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
      {/* ------------------------------ */}
      <form>
        <div className="form-group">
          <label htmlFor="username">username</label>
          <input
            type="email"
            className="form-control"
            id="username"
            aria-describedby="emailHelp"
          />
          <p className="text-danger">.text-danger</p>
        </div>
        <div className="form-group">
          <label htmlFor="password">password</label>
          <input type="password" className="form-control" id="password" />
          <p className="text-danger">.text-danger</p>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Register;
