import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  addNewPetThunk,
  fetchAllNoticesThunk,
  fetchFavoriteNoticesThunk,
  fetchFilteredNoticesThunk,
  fetchNoticeByIdThunk,
  fetchNoticesByCategoryAndSearchThunk,
  fetchNoticesByCategoryThunk,
  fetchNoticesBySearchThunk,
  fetchOwnNoticesThunk,
} from "./noticesOperations";

const initialState = {
  notices: {
    data: [],
    total: 0,
  },
  chosenNotice: null,
  petData: {},
  isLoading: false,
  error: null,
};

const noticesSlice = createSlice({
  name: "notices",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(addNewPetThunk.fulfilled, (state, action) => {
        state.petData = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchNoticeByIdThunk.fulfilled, (state, action) => {
        state.chosenNotice = action.payload;
        state.isLoading = false;
      })
      .addMatcher(
        isAnyOf(
          fetchNoticesBySearchThunk.fulfilled,
          fetchNoticesByCategoryThunk.fulfilled,
          fetchNoticesByCategoryAndSearchThunk.fulfilled,
          fetchFilteredNoticesThunk.fulfilled,
          fetchAllNoticesThunk.fulfilled,
          fetchOwnNoticesThunk.fulfilled,
          fetchFavoriteNoticesThunk.fulfilled
        ),
        (state, action) => {
          state.notices.data = action.payload.data;
          state.notices.total = action.payload.total;
          state.isLoading = false;
        }
      );
  },
});

export const noticesReducer = noticesSlice.reducer;
