import { createSlice } from "@reduxjs/toolkit";
import { fetchFriendsThunk, fetchNewsThunk } from "./globalOperations";

const initialState = {
  news: [],
  friends: [],
  isSuccess: false,
};

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setIsSuccess: (state, action) => {
      state.isSuccess = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNewsThunk.fulfilled, (state, action) => {
        state.news = action.payload;
      })
      .addCase(fetchFriendsThunk.fulfilled, (state, action) => {
        state.friends = action.payload;
      });
  },
});

export const { setIsSuccess } = globalSlice.actions;
export const globalReducer = globalSlice.reducer;
