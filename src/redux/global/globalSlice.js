import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { initialCheckboxesState } from "../../modules/filter/service/initialCheckboxesState";
import {
  fetchFriendsThunk,
  fetchNewsBySearchThunk,
  fetchNewsThunk,
} from "./globalOperations";

const pending = (state) => {
  state.isLoading = true;
  state.error = null;
};

const rejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const initialState = {
  news: {
    data: [],
    total: null,
  },
  friends: {
    data: [],
    total: null,
  },
  isSuccess: false,
  isButtonsVisible: false,
  checkboxes: initialCheckboxesState,
  isLoading: false,
};

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setIsSuccess: (state, action) => {
      state.isSuccess = action.payload;
    },
    toggleButtons: (state) => {
      state.isButtonsVisible = !state.isButtonsVisible;
      state.checkboxes.showCheckboxByAge = false;
      state.checkboxes.showCheckboxByGender = false;
    },
    toggleCheckboxByAge: (state) => {
      state.checkboxes.showCheckboxByAge = !state.checkboxes.showCheckboxByAge;
    },
    toggleCheckboxByGender: (state) => {
      state.checkboxes.showCheckboxByGender =
        !state.checkboxes.showCheckboxByGender;
    },
    toggleAgeOption: (state, action) => {
      const option = action.payload;
      state.checkboxes.ageOptions[option] =
        !state.checkboxes.ageOptions[option];
    },
    toggleGenderOption: (state, action) => {
      const option = action.payload;
      state.checkboxes.genderOptions[option] =
        !state.checkboxes.genderOptions[option];
    },
    setSelectCheckboxName: (state, action) => {
      const option = action.payload;
      console.log(option);
      state.checkboxes.selectCheckbox = option;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFriendsThunk.fulfilled, (state, action) => {
        state.friends.data = action.payload.data;
        state.friends.total = action.payload.total;
        state.isLoading = false;
      })
      .addMatcher(
        isAnyOf(fetchNewsThunk.fulfilled, fetchNewsBySearchThunk.fulfilled),
        (state, action) => {
          state.news.data = action.payload.data;
          state.news.total = action.payload.total;
          state.isLoading = false;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchNewsThunk.pending,
          fetchFriendsThunk.pending,
          fetchNewsBySearchThunk.pending
        ),
        pending
      )
      .addMatcher(
        isAnyOf(
          fetchNewsThunk.rejected,
          fetchFriendsThunk.rejected,
          fetchNewsBySearchThunk.rejected
        ),
        rejected
      );
  },
});

export const {
  setIsSuccess,
  toggleButtons,
  toggleCheckboxByAge,
  toggleCheckboxByGender,
  toggleAgeOption,
  toggleGenderOption,
  setSelectCheckboxName,
} = globalSlice.actions;
export const globalReducer = globalSlice.reducer;
