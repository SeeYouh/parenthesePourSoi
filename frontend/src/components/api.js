import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000",
});

// Permet l'enregistrement de l'utilisateur

export const signupUser = async (data) => {
  try {
    const response = await api.post("/auth/signup", data);

    localStorage.setItem("token", response.data.token);

    api.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${response.data.token}`;

    return response.data;
  } catch (error) {
    console.error("There was an error!", error);
  }
};

// Permet la connection de l'utilisateur déjà enregistré

export const loginUser = async (userData) => {
  try {
    const response = await api.post("/auth/login", userData);

    localStorage.setItem("token", response.data.token);

    api.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${response.data.token}`;

    return response.data;
  } catch (error) {
    console.error("There was an error!", error);
  }
};

// Permet la déconnection de l'utilisateur déjà connecté avec la suppression token correspondant

export const logoutUser = () => {
  localStorage.removeItem("token");

  delete api.defaults.headers.common["Authorization"];
};

export default api;
