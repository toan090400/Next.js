import Head from "next/head";
import Login_Page from "../components/Main/login";
const Login = () => {
  return (
    <>
      <Head>
        <title>Login</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/icon-2.jpg" />
      </Head>
      <Login_Page />
    </>
  );
};

export default Login;
