import Link from "next/link";
import { useContext } from "react";
import AuthContext from "../../context/auth";
const Login = () => {
  const context = useContext(AuthContext);
  const loginGoogle = () => {
    context.onLogin("google");
  };
  const loginGithub = () => {
    context.onLogin("github");
  };
  return (
    <div className="container">
      <h1>Login Page</h1>
      <button onClick={loginGoogle} type="button" className="btn btn-dark">
        Login Google
      </button>
      <button onClick={loginGithub} type="button" className="btn btn-dark">
        Login Github
      </button>
    </div>
  );
};

export default Login;
