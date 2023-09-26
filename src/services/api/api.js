import axios from "axios";

const connectionsApi = axios.create({
  baseURL: "https://petgrammers-backend.onrender.com/api",
});

/**
  |============================
  | Set token
  |============================
*/
export const setToken = (token) => {
  connectionsApi.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearToken = () => {
  connectionsApi.defaults.headers.common.Authorization = ``;
};

/**
  |============================
  | Auth Controller
  |============================
*/
// Registration new user
export const register = async (user) => {
  const { data } = await connectionsApi.post(`/auth/register`, user);
  setToken(data.token);
  return data;
};

// Login user
export const login = async (user) => {
  const { data } = await connectionsApi.post(`/auth/login`, user);
  setToken(data.token);
  return data;
};

// Logout user
export const logout = async () => {
  await connectionsApi.post(`/auth/logout`);
  clearToken();
};

//Current
export const getCurrentUser = () => {
  const { data } = connectionsApi.get(`/auth/current`);
  return data;
};
