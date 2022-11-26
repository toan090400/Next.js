import Message from "../Layout/message";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
const Login = ({ loginData }) => {
  // set up message
  const [status, setStatus] = useState(false);
  const [message, setMessage] = useState();
  // set up form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      const login = await axios.post(
        "http://localhost:3000/api/auth/login",
        data
      );
      loginData(login.data);
    } catch (error) {
      const dataLogin = error.response.data;
      setStatus(true);
      setMessage(dataLogin);
    }
  };
  return (
    <div className="container mt-4">
      <h1>Login page</h1>
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
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
