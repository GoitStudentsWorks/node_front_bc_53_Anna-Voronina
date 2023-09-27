import { createSlice } from '@reduxjs/toolkit';
import { initialCheckboxesState } from '../../modules/filter/service/initialCheckboxesState';

const initialState = {
  isSuccess: false,
  isButtonsVisible: false,
  checkboxes: initialCheckboxesState,
};

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setIsSuccess: (state, action) => {
      state.isSuccess = action.payload;
    },
    toggleButtons: state => {
      state.isButtonsVisible = !state.isButtonsVisible;
      state.checkboxes.showCheckboxByAge = false;
      state.checkboxes.showCheckboxByGender = false;
    },
    toggleCheckboxByAge: state => {
      state.checkboxes.showCheckboxByAge = !state.checkboxes.showCheckboxByAge;
    },
    toggleCheckboxByGender: state => {
      state.checkboxes.showCheckboxByGender = !state.checkboxes.showCheckboxByGender;
    },
    toggleAgeOption: (state, action) => {
      const option = action.payload;
      state.checkboxes.ageOptions[option] = !state.checkboxes.ageOptions[option];
    },
    toggleGenderOption: (state, action) => {
      const option = action.payload;
      state.checkboxes.genderOptions[option] = !state.checkboxes.genderOptions[option];
    },
    setSelectCheckboxName: (state, action) => {
      const option = action.payload;
      console.log(option);
      state.checkboxes.selectCheckbox = option;
    },
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
