import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "../types/todo";
import { RootState } from "./store";

export type TodoState = Todo[];

const initialState: TodoState = [];

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    todoAdded(state: TodoState, action: PayloadAction<string>) {
      state.push({
        id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
        text: action.payload,
        completed: false,
      });
    },
  },
});

export const { todoAdded } = todosSlice.actions;

export const todoSelector = (rootState: RootState) => rootState.todo || [];

export default todosSlice.reducer;
