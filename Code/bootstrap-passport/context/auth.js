import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { removeCookies } from "cookies-next";
const AuthContext = React.createContext();

export const AuthContextProvider = (props) => {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [getUser, setIsUser] = useState({});

  const getUserData = async () => {
    try {
      const url = `http://localhost:3000/api/login/success`;
      const userG = await axios.get(url);
      setIsUser(userG.data.user);
      setIsLoggedIn(userG.data.success);
    } catch (err) {
      setIsLoggedIn(err.response.data.success);
    }
  };
  useEffect(() => {
    getUserData();
  }, []);

  const loginHandler = async (item) => {
    await window.open(`http://localhost:3000/api/${item}`, "_self");
  };

  const logoutHandler = () => {
    removeCookies("token");
    setIsLoggedIn(false);
    setIsUser({});
    router.push("/login");
  };
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler,
        isUser: getUser,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
