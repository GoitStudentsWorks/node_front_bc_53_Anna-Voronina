import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchFriends, fetchNews } from "../../services/api/api";

export const fetchNewsThunk = createAsyncThunk(
  "global/fetchNews",
  async ({ page, limit }, { rejectWithValue }) => {
    try {
      const { data } = await fetchNews({ page, limit });
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const fetchFriendsThunk = createAsyncThunk(
  "global/fetchFriends",
  async ({ page, limit }, { rejectWithValue }) => {
    try {
      const { data } = await fetchFriends({ page, limit });
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
