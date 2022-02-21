import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoListStore from "../TodoListStore";
import { Provider } from "react-redux";
import { store } from "../../../../store/store";
import { todoAdded } from "../../../../store/todoSlice";

describe("TODO List Item Store", () => {
  beforeEach(() => {});
  afterEach(cleanup);
  it("Should render properly with an empty list", () => {
    render(
      <Provider store={store}>
        <TodoListStore />
      </Provider>
    );
    screen.getByText("There is no todos, please add one.");
  });
  it("Should render properly with an existing list", async () => {
    await store.dispatch(todoAdded("TODO REDUX"));
    render(
      <Provider store={store}>
        <TodoListStore />
      </Provider>
    );
    expect(
      screen.queryByText("There is no todos, please add one.")
    ).not.toBeInTheDocument();
    expect(screen.getByText("TODO REDUX")).toBeInTheDocument();
  });
});
