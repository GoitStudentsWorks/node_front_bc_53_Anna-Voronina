import { createSelector } from "@reduxjs/toolkit";
import { selectFavorites } from "../auth/authSelectors";

export const selectPetData = (state) => state.notices.petData;
export const selectNotices = (state) => state.notices.notices;
export const selectChosenNotice = (state) => state.notices.chosenNotice;
export const selectAgeArray = (state) => state.notices.ageArray;
export const selectSexArray = (state) => state.notices.sexArray;

export const selectFilteredNotices = createSelector(
  [selectNotices, selectFavorites],
  ({ data }, favorites) => {
    favorites.some((ad) => ad._id === _id);
  }
);
