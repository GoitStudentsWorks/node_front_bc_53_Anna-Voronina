import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  addNewNotice,
  addNewPet,
  addOrDeleteFavoriteNotice,
  deleteOwnNotice,
  deletePet,
  fetchNoticesByCategory,
  fetchNoticesByCategoryAndSearch,
  fetchNoticesBySearch,
  fetchNoticeById,
  fetchFilteredNotices,
  fetchAllNotices,
  fetchOwnNotices,
  fetchFavoriteNotices,
} from "../../services/api/api";
import { fetchUserDataThunk } from "../auth/authOperations";

export const fetchNoticesBySearchThunk = createAsyncThunk(
  "notices/fetchNoticesBySearch",
  async ({ page, limit, searchQuery }, { rejectWithValue }) => {
    try {
      const { data } = await fetchNoticesBySearch({ page, limit, searchQuery });
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const fetchNoticesByCategoryThunk = createAsyncThunk(
  "notices/fetchNoticesByCategory",
  async ({ page, limit, category }, { rejectWithValue }) => {
    try {
      const { data } = await fetchNoticesByCategory({ page, limit, category });
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const fetchNoticesByCategoryAndSearchThunk = createAsyncThunk(
  "notices/fetchNoticesByCategoryAndSearch",
  async ({ page, limit, category, searchQuery }, { rejectWithValue }) => {
    try {
      const { data } = await fetchNoticesByCategoryAndSearch({
        page,
        limit,
        category,
        searchQuery,
      });
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const fetchNoticeByIdThunk = createAsyncThunk(
  "notices/fetchNoticeById",
  async (noticeId, { rejectWithValue }) => {
    try {
      const { data } = await fetchNoticeById(noticeId);
      console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const fetchFilteredNoticesThunk = createAsyncThunk(
  "notices/fetchFilteredNotices",
  async ({ age, sex, category, page, limit }, { rejectWithValue }) => {
    try {
      const { data } = await fetchFilteredNotices({
        age,
        sex,
        category,
        page,
        limit,
      });
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const fetchAllNoticesThunk = createAsyncThunk(
  "notices/fetchAllNotices",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await fetchAllNotices();
      console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const fetchOwnNoticesThunk = createAsyncThunk(
  "notices/fetchOwnNotices",
  async ({ page, limit }, { rejectWithValue }) => {
    try {
      const { data } = await fetchOwnNotices({ page, limit });
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const fetchFavoriteNoticesThunk = createAsyncThunk(
  "notices/fetchFavoriteNotices",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await fetchFavoriteNotices();
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const addNewPetThunk = createAsyncThunk(
  "pet/addNewPet",
  async (pet, { rejectWithValue }) => {
    try {
      const { data } = await addNewPet(pet);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const deletePetThunk = createAsyncThunk(
  "pet/deletePet",
  async (petId, { rejectWithValue }) => {
    try {
      const { data } = await deletePet(petId);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const deleteOwnNoticeThunk = createAsyncThunk(
  "notices/deleteOwnNotice",
  async (noticeId, { rejectWithValue }) => {
    try {
      const { data } = await deleteOwnNotice(noticeId);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const addOrDeleteFavoriteNoticeThunk = createAsyncThunk(
  "notices/addOrDeleteFavoriteNotice",
  async (noticeId, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await addOrDeleteFavoriteNotice(noticeId);
      dispatch(fetchUserDataThunk());
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const addNewNoticeThunk = createAsyncThunk(
  "notices/addNewNotice",
  async (notice, { rejectWithValue }) => {
    try {
      const { data } = await addNewNotice(notice);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
