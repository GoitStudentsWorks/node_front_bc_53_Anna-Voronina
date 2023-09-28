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
  | Auth and User Controllers
  |============================
*/
// Registration new user
export const register = async (user) => {
  const { data } = await connectionsApi.post("/auth/register", user);
  setToken(data.token);
  return data;
};

// Login user
export const login = async (user) => {
  const { data } = await connectionsApi.post("/auth/login", user);
  setToken(data.token);
  return data;
};

// Logout user
export const logout = async () => {
  await connectionsApi.post("/auth/logout");
  clearToken();
};

//Current
export const getCurrentUser = () => {
  const { data } = connectionsApi.get("/auth/current");
  return data;
};

export const updateUserData = async (user) => {
  const data = await connectionsApi.patch("/auth/user", user);
  return data;
};

export const updateAvatar = async (avatar) => {
  const data = await connectionsApi.patch("/auth/user/avatar", avatar);
  return data;
};

export const fetchUserData = async () => {
  const data = connectionsApi.get("/userInfo");
  return data;
};

/**
  |============================
  | News and Friends Controllers
  |============================
*/

export const fetchNews = ({ page = 1, limit = 6 }) => {
  const data = connectionsApi.get("/news", {
    params: {
      page,
      limit,
    },
  });
  return data;
};

export const fetchFriends = ({ page = 1, limit = 6 }) => {
  const data = connectionsApi.get("/friends", {
    params: {
      page,
      limit,
    },
  });
  return data;
};

/**
  |============================
  | Notices and Pets Controllers
  |============================
*/

export const addNewPet = (pet) => {
  const data = connectionsApi.post("/pets", pet);
  return data;
};

export const deletePet = (petId) => {
  const data = connectionsApi.delete(`/pets/${petId}`);
  return data;
};
