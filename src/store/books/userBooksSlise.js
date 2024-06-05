import { createSlice } from "@reduxjs/toolkit";
import { fetchUserBooks } from "./operations";

const userBooksSlice = createSlice({
  name: "userBooks",
  initialState: {
    userBooks: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserBooks.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchUserBooks.fulfilled, (state, { payload }) => {
        state.userBooks = payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchUserBooks.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const userBooksReducer = userBooksSlice.reducer;
