const Message = ({ data }) => {
  const status = data.success;
  const message = data.message;
  return (
    <div
      className={`alert alert-${
        status ? "success" : "warning"
      } alert-dismissible fade show`}
      role="alert"
    >
      {message}
      <button
        type="button"
        className="close"
        data-dismiss="alert"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
};

export default Message;
