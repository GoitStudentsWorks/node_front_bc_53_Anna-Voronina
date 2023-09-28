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

export const fetchNewsBySearch = async (searchQuery) => {
  const data = connectionsApi.get(`/news/${searchQuery}`);
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

// ------- PUBLIC ------- //

export const fetchNoticesBySearch = async ({
  page = 1,
  limit = 12,
  searchQuery,
}) => {
  const data = connectionsApi.get(`/notices/query/${searchQuery}`, {
    params: {
      page,
      limit,
    },
  });
  return data;
};

export const fetchNoticesByCategory = async (category) => {
  const data = connectionsApi.get(`/notices/search/${category}`);
  return data;
};

export const fetchNoticesByCategoryAndSearch = async ({
  category,
  searchQuery,
}) => {
  const data = connectionsApi.get(`/notices/search/${category}/${searchQuery}`);
  return data;
};

export const fetchNoticeById = async (noticeId) => {
  const data = connectionsApi.get(`/notices/search/${noticeId}`);
  return data;
};

export const fetchFilteredNotices = async ({
  age = "1",
  sex,
  category = "sell",
}) => {
  const data = connectionsApi.get("/filter/by", {
    params: {
      age,
      sex,
      category,
    },
  });
  return data;
};

// ------- PRIVATE ------- //

export const fetchAllNotices = async ({ page = 1, limit = 12 }) => {
  const data = connectionsApi.get("/notices/get/all", {
    params: {
      page,
      limit,
    },
  });
  return data;
};

export const fetchOwnNotices = async ({ page = 1, limit = 12 }) => {
  const data = connectionsApi.get("/notices", {
    params: {
      page,
      limit,
    },
  });
  return data;
};

export const fetchFavoriteNotices = async () => {
  const data = connectionsApi.get("/notices/get/favorites");
  return data;
};

export const addNewNotice = (notice) => {
  const data = connectionsApi.post("/notices", notice);
  return data;
};

export const addOrDeleteFavoriteNotice = (noticeId) => {
  const data = connectionsApi.patch(`/notices/${noticeId}/favorite`);
  return data;
};

export const deleteOwnNotice = (noticeId) => {
  const data = connectionsApi.delete(`/notices/${noticeId}`);
  return data;
};
