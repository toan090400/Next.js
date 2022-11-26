import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Message from "../Layout/message";
const Register = () => {
  // set up message
  const [status, setStatus] = useState(false);
  const [message, setMessage] = useState();
  // set up form
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();
  const password = watch("password");
  const onSubmit = async (data) => {
    try {
      const register = await axios.post("http://localhost:3000/api/auth", data);
      const dataRegister = register.data;
      reset();
      setStatus(true);
      setMessage(dataRegister);
    } catch (error) {
      const dataRegister = error.response.data;
      setStatus(true);
      setMessage(dataRegister);
    }
  };

  return (
    <div className="container mt-4">
      <h1>Register page</h1>
      {status && <Message data={message} />}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="username">username</label>
          <input
            type="text"
            className="form-control"
            id="username"
            {...register("username", {
              required: {
                value: true,
                message: "Tên người dùng không được trống",
              },
              minLength: {
                value: 3,
                message: "Tên người dùng tối thiểu có 3 ký tự",
              },
            })}
          />
          {errors.username && (
            <p className="text-danger">{errors.username.message}</p>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="password">password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            {...register("password", {
              required: {
                value: true,
                message: "Mật khẩu không được trống",
              },
            })}
          />
          {errors.password && (
            <p className="text-danger">{errors.password.message}</p>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="password_confim">password_confim</label>
          <input
            type="password"
            className="form-control"
            id="password_confim"
            {...register("passwordConfirm", {
              validate: (value) => value === password || "Password không khớp",
            })}
          />
          {errors.passwordConfirm && (
            <p className="text-danger">{errors.passwordConfirm.message}</p>
          )}
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Register;
