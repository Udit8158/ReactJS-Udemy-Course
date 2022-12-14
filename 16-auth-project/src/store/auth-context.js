import React, { useState } from "react";

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  logIn: (token) => {},
  logOut: () => {},
});

export const AuthContextProvider = (props) => {
  const initialToken = localStorage.getItem("token");
  const [token, setToken] = useState(initialToken);
  const userIsLoggedIn = !!token;

  const logOutHandler = () => {
    setToken(null);
    localStorage.removeItem("token");
  };

  const logInHandler = (token) => {
    setToken(token);
    localStorage.setItem("token", token);

    // setTimeout(logOutHandler, 4000);
  };

  const val = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    logIn: logInHandler,
    logOut: logOutHandler,
  };
  return (
    <AuthContext.Provider value={val}>{props.children}</AuthContext.Provider>
  );
};

export default AuthContext;
