import { createSelector } from "@reduxjs/toolkit";

export const selectIsSuccess = (state) => state.global.isSuccess;
export const selectNews = (state) => state.global.news;
export const selectFriends = (state) => state.global.friends;
export const selectorIsLoading = (state) => state.global.isLoading;

export const selectNewsSort = createSelector([selectNews], (items) => {
  return [...items].sort((a, b) => new Date(b.date) - new Date(a.date));
});
