import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { authReducer } from "./auth/authSlice";
import { booksReducer } from "./books/booksSlise";
import { recommendReducer } from "./recommend/recommendSlise";
import { userBooksReducer } from "./books/userBooksSlise";

const persistConfig = {
  key: "auth",
  version: 1,
  storage,
  whitelist: ["token", "refreshToken", "expireTime"],
};

const recommendPersistConfig = {
  key: "recommended",
  version: 1,
  storage,
};
const persistConfigBooks = {
  key: "books",
  version: 1,
  storage,
  whitelist: ["path"],
};
const recommendPersistedReducer = persistReducer(
  recommendPersistConfig,
  recommendReducer
);
const persistedReducer = persistReducer(persistConfig, authReducer);
const persistedReducerBooks = persistReducer(persistConfigBooks, booksReducer);

export const store = configureStore({
  reducer: {
    auth: persistedReducer,
    books: persistedReducerBooks,
    recommend: recommendPersistedReducer,
    userBooks: userBooksReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
