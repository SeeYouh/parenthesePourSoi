// Logout.js
import React, { useContext } from "react";
import { AuthContext } from "./auth/AuthContext";

const Logout = () => {
  const { logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  };

  return <button onClick={handleLogout}>Log Out</button>;
};

export default Logout;
