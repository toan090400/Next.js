import Link from "next/link";
import { useForm } from "react-hook-form";
import Message from "../../Layout/message";
const New = ({ createData, messageData }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = async (data) => {
    createData(data);
    reset();
  };
  return (
    <div className="container mt-4">
      <h1>Create Category</h1>
      <Link className="btn btn-primary mb-4" href="/admin/categorys">
        List Category
      </Link>
      {messageData && <Message data={messageData} />}
      <form onSubmit={handleSubmit(onSubmit)}>
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
          />
          {errors.description && (
            <p className="text-danger">{errors.description.message}</p>
          )}
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default New;
