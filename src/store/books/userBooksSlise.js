import { createSlice } from "@reduxjs/toolkit";
import {
  deleteUserBook,
  fetchBookInfo,
  fetchUserBooks,
  finishReadingBook,
  startReadingBook,
} from "./operations";

const userBooksSlice = createSlice({
  name: "userBooks",
  initialState: {
    userBooks: [],
    bookInfo: null,
    readingState: {
      isReading: false,
      readingBookId: null,
      start: null,
      finish: null,
    },
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
      })
      .addCase(deleteUserBook.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteUserBook.fulfilled, (state, { payload }) => {
        state.userBooks = state.userBooks.filter(
          (book) => book._id !== payload.id
        );
        state.isLoading = false;
        state.error = null;
      })
      .addCase(deleteUserBook.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(fetchBookInfo.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchBookInfo.fulfilled, (state, { payload }) => {
        state.bookInfo = payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchBookInfo.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(startReadingBook.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(startReadingBook.fulfilled, (state, { payload }) => {
        state.readingState = {
          isReading: true,
          readingBookId: payload._id,
        };
        state.bookInfo = payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(startReadingBook.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(finishReadingBook.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(finishReadingBook.fulfilled, (state, { payload }) => {
        state.readingState = {
          isReading: false,
          readingBookId: null,
        };
        state.bookInfo = payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(finishReadingBook.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const userBooksReducer = userBooksSlice.reducer;
