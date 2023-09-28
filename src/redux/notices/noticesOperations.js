import { createAsyncThunk } from "@reduxjs/toolkit";
import { addNewPet, deletePet } from "../../services/api/api";

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
