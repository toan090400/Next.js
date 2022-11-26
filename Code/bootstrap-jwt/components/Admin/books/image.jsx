import Link from "next/link";
import { useForm } from "react-hook-form";
import Message from "../../../components/Layout/message";
const Image = ({ messageData, createData }) => {
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
      <h1>Create Book</h1>
      <Link className="btn btn-primary mb-4" href="/admin/books">
        List Book
      </Link>
      {messageData && <Message data={messageData} />}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="image">Image:</label>
          <input
            type="file"
            // className="form-control"
            id="image"
            accept=".png, .jpg, .jpeg"
            {...register("image", {
              required: {
                value: true,
                message: "Image không được trống",
              },
            })}
          />
          {errors.image && (
            <p className="text-danger">{errors.image.message}</p>
          )}
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Image;
