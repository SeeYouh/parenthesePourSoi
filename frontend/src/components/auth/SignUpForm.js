// import React, { useState } from 'react';
// import axios from 'axios';

// const SignUpForm = ({ setIsSignUpFormVisible }) => {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//     confirmPassword: '',
//   });

//   const [passwordError, setPasswordError] = useState(null);

//   const handleChange = (event) => {
//     setFormData({
//       ...formData,
//       [event.target.name]: event.target.value,
//     });
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (formData.password !== formData.confirmPassword) {
//       setPasswordError("Les mots de passe ne correspondent pas !");
//       return;
//     }

//     setPasswordError(null);

//     try {
//       const response = await axios.post('/signup', formData);
//       console.log(response.data);
//       setIsSignUpFormVisible(false);
//     } catch (error) {
//       console.error('Une erreur s\'est produite !', error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="email"
//         name="email"
//         placeholder="Email"
//         value={formData.email}
//         onChange={handleChange}
//       />
//       <input
//         type="password"
//         name="password"
//         placeholder="Mot de passe"
//         value={formData.password}
//         onChange={handleChange}
//       />
//       <input
//         type="password"
//         name="confirmPassword"
//         placeholder="Confirmez le mot de passe"
//         value={formData.confirmPassword}
//         onChange={handleChange}
//       />
//       {passwordError && <p>{passwordError}</p>}
//       <button type="submit">Créer un compte</button>
//     </form>
//   );
// };

// export default SignUpForm;

import React, { useState, useContext } from "react";
import { AuthContext } from "./AuthContext";

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { signUp } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
    } else {
      await signUp(email, password);
    }
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
      <label>
        Confirm Password:
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
      </label>
      <input type="submit" value="Sign Up" />
    </form>
  );
};

export default SignUpForm;
