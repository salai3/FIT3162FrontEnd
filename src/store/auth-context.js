import { createContext, useState } from "react";

const AuthContext = createContext({
  token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY1NTgwNjUyLCJpYXQiOjE2NjU1ODAzNTIsImp0aSI6IjkyNzI5MzMyM2M1YzRjY2Q5Yzg4NmQzNDM3ZWVhZmFiIiwidXNlcl9pZCI6MX0.kI02tFEE1Xjw9dwMRm-rKYa3rYkyO7rYtE73dERqTBY",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const [token, setToken] = useState("eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY1NTgwNjUyLCJpYXQiOjE2NjU1ODAzNTIsImp0aSI6IjkyNzI5MzMyM2M1YzRjY2Q5Yzg4NmQzNDM3ZWVhZmFiIiwidXNlcl9pZCI6MX0.kI02tFEE1Xjw9dwMRm-rKYa3rYkyO7rYtE73dERqTBY");

  const userIsLoggedIn = !!token;

  const loginHandler = (token) => {
    setToken(token);
  };
  const logoutHandler = () => {
    setToken(null);
  };

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;