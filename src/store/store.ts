import { configureStore } from "@reduxjs/toolkit";
import todo from "./todoSlice";

export const configureAppStore = () => {
  return configureStore({
    reducer: {
      todo,
    },
  });
};

export const store = configureAppStore();

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
