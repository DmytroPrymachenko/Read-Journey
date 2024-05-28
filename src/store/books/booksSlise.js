import { createSlice } from "@reduxjs/toolkit";
import { recommendedBooksThunk } from "./operations";

const booksSlice = createSlice({
  name: "books",
  initialState: {
    recommendedBooks: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(recommendedBooksThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(recommendedBooksThunk.fulfilled, (state, { payload }) => {
        state.recommendedBooks = payload.results;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(recommendedBooksThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const booksReducer = booksSlice.reducer;
