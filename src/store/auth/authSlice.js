import { createSlice } from "@reduxjs/toolkit";
import {
  currentThunk,
  logoutThunk,
  signInThunk,
  signUpThunk,
} from "./operations";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isLoading: false,
    error: null,
    token: "",
    refreshToken: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signUpThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signUpThunk.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.token = payload.token;
        state.refreshToken = payload.refreshToken;
        state.isLoading = false;
      })
      .addCase(signUpThunk.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      })
      .addCase(signInThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signInThunk.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.token = payload.token;
        state.refreshToken = payload.refreshToken;
        state.isLoading = false;
      })
      .addCase(signInThunk.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      })
      .addCase(currentThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(currentThunk.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoading = false;
      })
      .addCase(currentThunk.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = true;
      })
      .addCase(logoutThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logoutThunk.fulfilled, (state) => {
        state.user = null;
        state.token = "";
        state.refreshToken = "";
        state.isLoading = false;
      })
      .addCase(logoutThunk.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = true;
      });
  },
});

export const authReducer = authSlice.reducer;
