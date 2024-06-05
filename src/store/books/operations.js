import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../api/api";

export const recommendedBooksThunk = createAsyncThunk(
  "books/recommend",
  async ({ title = "", author = "", page = 1, limit = 10 }, thunkAPI) => {
    try {
      const { data } = await api.get("/books/recommend", {
        params: { title, author, page, limit },
      });
      // console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message ?? error.message
      );
    }
  }
);

export const addBookFromRecommendations = createAsyncThunk(
  "books/add/idBook",
  async (id, thunkAPI) => {
    try {
      const { data } = await api.post(`/books/add/${id}`);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const fetchUserBooks = createAsyncThunk(
  "books/UserBooks",
  async ({ status } = {}, thunkAPI) => {
    try {
      const config = status ? { params: { status } } : {};
      const { data } = await api.get("/books/own", config);
      console.log("data", data);
      return data;
    } catch (error) {
      console.log("error", error);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
// export const fetchUserBooks = createAsyncThunk(
//   "books/UserBooks",
//   async ({ status }, thunkAPI) => {
//     try {
//       const { data } = await api.get("/books/own", { params: { status } });
//       console.log("data", data);
//       return data;
//     } catch (error) {
//       console.log("error", error);
//       return thunkAPI.rejectWithValue(error.response.data);
//     }
//   }
// );
