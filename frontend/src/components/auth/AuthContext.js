import React, { createContext, useState } from "react";
import { loginUser, logoutUser, signupUser } from "../api";

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const [authState, setAuthState] = useState({
    isAuthenticated: false,
    user: null,
  });

  const login = async (email, password) => {
    const user = await loginUser({ email, password });
    if (user) {
      setAuthState({
        isAuthenticated: true,
        user: user,
      });
    }
  };

  const signUp = async (email, password) => {
    const user = await signupUser({ email, password });
    if (user) {
      setAuthState({
        isAuthenticated: true,
        user: user,
      });
    }
  };

  const logout = () => {
    logoutUser();
    setAuthState({
      isAuthenticated: false,
      user: null,
    });
  };

  return (
    <AuthContext.Provider value={{ authState, login, logout, signUp }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
