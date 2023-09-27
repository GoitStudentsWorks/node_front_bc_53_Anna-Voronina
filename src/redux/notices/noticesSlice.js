import { createSlice } from "@reduxjs/toolkit";
import { addNewPetThunk } from "./noticesOperations";

const initialState = {
  notices: [],
  petData: {},
};

const noticesSlice = createSlice({
  name: "notices",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(addNewPetThunk.fulfilled, (state, action) => {
      state.petData = action.payload;
    });
  },
});

export const noticesReducer = noticesSlice.reducer;
