import Link from "next/link";
import { useForm } from "react-hook-form";
import Message from "../../Layout/message";
const Edit = ({ Data, nameData, messageData, editData }) => {
  const name = Data.book.name;
  const description = Data.book.description;
  const user = Data.book.userId.username;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    editData(data);
  };
  return (
    <div className="container mt-4">
      <h1>Edit Book: {nameData}</h1>
      <Link className="btn btn-primary mb-4" href="/admin/books">
        List Book
      </Link>
      {messageData && <Message data={messageData} />}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="name">User</label>
          <input
            type="text"
            className="form-control"
            id="name"
            defaultValue={user}
            disabled
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            {...register("name", {
              required: {
                value: true,
                message: "Name không được trống",
              },
              minLength: {
                value: 3,
                message: "Name tối thiểu có 3 ký tự",
              },
            })}
            defaultValue={name}
          />
          {errors.name && <p className="text-danger">{errors.name.message}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            className="form-control"
            id="description"
            {...register("description", {
              required: {
                value: true,
                message: "Description không được trống",
              },
            })}
            defaultValue={description}
          />
          {errors.description && (
            <p className="text-danger">{errors.description.message}</p>
          )}
        </div>
        {/* <div className="form-group">
          {categorys.map((item) => {
            return (
              <div key={item._id} className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value={item._id}
                  id={item.name}
                  {...register("category", {
                    required: {
                      value: true,
                      message: "Category không được trống",
                    },
                  })}
                />
                <label className="form-check-label" htmlFor={item.name}>
                  {item.name}
                </label>
              </div>
            );
          })}
          {errors.category && (
            <p className="text-danger">{errors.category.message}</p>
          )}
        </div> */}
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Edit;
