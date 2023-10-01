import { useSelector } from "react-redux";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  setToken,
  register,
  login,
  logout,
  getCurrentUser,
  updateUserData,
  updateAvatar,
  fetchUserData,
  updateToken,
} from "../../services/api/api.js";
import { selectRefreshToken } from "./authSelectors.js";

export const registerThunk = createAsyncThunk(
  "auth/register",
  async ({ name, email, password }, { rejectWithValue }) => {
    try {
      const data = await register({ name, email, password });
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const loginThunk = createAsyncThunk(
  "auth/login",
  async (credentials, { rejectWithValue, dispatch }) => {
    try {
      const data = await login(credentials);
      dispatch(fetchUserDataThunk());
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const logoutThunk = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      await logout();
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const refreshThunk = createAsyncThunk(
  "auth/refresh",
  async (_, { rejectWithValue, getState, dispatch }) => {
    const persistedToken = getState().auth.token;
    if (!persistedToken) {
      return rejectWithValue("Token is not found!");
    }
    try {
      setToken(persistedToken);
      const { data } = await getCurrentUser();
      dispatch(updateTokenThunk());
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const updateTokenThunk = createAsyncThunk(
  "auth/updateToken",
  async (_, { rejectWithValue, getState }) => {
    const persistedToken = getState().auth.token;
    const refreshToken = useSelector(selectRefreshToken);

    if (!persistedToken) {
      return rejectWithValue("Token is not found!");
    }

    if (!refreshToken) {
      return rejectWithValue("Refresh token is not found!");
    }

    try {
      setToken(persistedToken);
      const { data } = await updateToken(refreshToken);
      console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const updateUserDataThunk = createAsyncThunk(
  "auth/updateUserData",
  async (credentials, { rejectWithValue }) => {
    try {
      const data = await updateUserData(credentials);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const updateAvatarThunk = createAsyncThunk(
  "auth/updateAvatar",
  async (avatar, { rejectWithValue }) => {
    try {
      const data = await updateAvatar(avatar);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const fetchUserDataThunk = createAsyncThunk(
  "auth/fetchUserData",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await fetchUserData();

      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
