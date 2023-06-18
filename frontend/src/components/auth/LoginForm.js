// import React, { useState } from 'react';
// import axios from "axios";

// const LoginForm = ({ onLogin }) => {
//   const [formData, setFormData] = useState({
//     username: '',
//     password: '',
//   });

//   const handleChange = (event) => {
//     setFormData({
//       ...formData,
//       [event.target.name]: event.target.value,
//     });
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       const response = await axios.post('/api/login', formData);

//       // Passer les données de l'utilisateur à la fonction de connexion
//       onLogin(response.data);

//     } catch (error) {
//       console.error('There was an error!', error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         name="username"
//         placeholder="Username"
//         value={formData.username}
//         onChange={handleChange}
//       />
//       <input
//         type="password"
//         name="password"
//         placeholder="Password"
//         value={formData.password}
//         onChange={handleChange}
//       />
//       <button type="submit">Log In</button>
//     </form>
//   );
// };

// export default LoginForm;

import React, { useState, useContext } from "react";
import { AuthContext } from "./AuthContext";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      <input type="submit" value="Log in" />
    </form>
  );
};

export default LoginForm;
