import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  fetchUserDataThunk,
  loginThunk,
  logoutThunk,
  refreshThunk,
  registerThunk,
  updateAvatarThunk,
  updateUserDataThunk,
} from "./authOperations";

const pending = (state) => {
  state.isLoading = true;
  state.error = null;
};

const rejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const initialState = {
  user: {
    name: null,
    email: null,
    avatarURL: null,
    phone: null,
    birthday: null,
    city: null,
    favorites: [],
    pets: [],
  },
  token: null,
  isLoading: false,
  error: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(logoutThunk.fulfilled, (state) => {
        (state.user = initialState.user), (state.token = null);
        state.isLoggedIn = false;
      })
      .addCase(refreshThunk.fulfilled, (state, action) => {
        state.user = { ...state.user, ...action.payload };
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshThunk.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(refreshThunk.rejected, (state) => {
        state.isRefreshing = false;
      })
      .addCase(updateAvatarThunk.fulfilled, (state, action) => {
        state.user.avatarURL = action.payload;
        state.isLoading = false;
      })
      .addMatcher(
        isAnyOf(loginThunk.fulfilled, registerThunk.fulfilled),
        (state, { payload }) => {
          state.user = { ...state.user, ...payload.user };
          state.token = payload.token;
          state.isLoggedIn = true;
          state.isLoading = false;
        }
      )
      .addMatcher(
        isAnyOf(fetchUserDataThunk.fulfilled, updateUserDataThunk.fulfilled),
        (state, action) => {
          state.user = { ...state.user, ...action.payload };
          state.isLoading = false;
        }
      )
      .addMatcher(
        isAnyOf(
          loginThunk.pending,
          registerThunk.pending,
          updateAvatarThunk.pending,
          updateUserDataThunk.pending,
          fetchUserDataThunk.pending
        ),
        pending
      )
      .addMatcher(
        isAnyOf(
          loginThunk.rejected,
          registerThunk.rejected,
          updateAvatarThunk.rejected,
          updateUserDataThunk.rejected,
          fetchUserDataThunk.rejected
        ),
        rejected
      );
  },
});

export const authReducer = authSlice.reducer;
