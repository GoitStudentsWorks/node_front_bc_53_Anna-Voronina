import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isSuccess: false,
};

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setIsSuccess: (state, action) => {
      state.isSuccess = action.payload;
    },
  },
});

export const { setIsSuccess } = globalSlice.actions;
export const globalReducer = globalSlice.reducer;
