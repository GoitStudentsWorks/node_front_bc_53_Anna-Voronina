import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { fetchFriendsThunk, fetchNewsThunk } from "./globalOperations";

const pending = (state) => {
  state.isLoading = true;
  state.error = null;
};

const rejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const initialState = {
  news: [],
  friends: [],
  isSuccess: false,
  isLoading: false,
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
        state.isLoading = false;
      })
      .addCase(fetchFriendsThunk.fulfilled, (state, action) => {
        state.friends = action.payload;
        state.isLoading = false;
      })
      .addMatcher(
        isAnyOf(fetchNewsThunk.pending, fetchFriendsThunk.pending),
        pending
      )
      .addMatcher(
        isAnyOf(fetchNewsThunk.rejected, fetchFriendsThunk.rejected),
        rejected
      );
  },
});

export const { setIsSuccess } = globalSlice.actions;
export const globalReducer = globalSlice.reducer;
