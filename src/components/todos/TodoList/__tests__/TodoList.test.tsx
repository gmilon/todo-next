import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../TodoList";
import { Todo } from "../../../../types/todo";
import { Provider } from "react-redux";
import { configureAppStore, store } from "../../../../store/store";
import { todoAdded } from "../../../../store/todoSlice";

const todos: Todo[] = [
  {
    id: 0,
    text: "test todo 1",
    completed: false,
  },
  {
    id: 1,
    text: "test todo 2",
    completed: false,
  },
];
describe("TODO List Item", () => {
  it("Should render properly withs some todos", async () => {
    render(
      <Provider store={store}>
        <TodoList todos={todos} />
      </Provider>
    );
    expect(screen.getByText("test todo 1")).toBeInTheDocument();
    expect(screen.getByText("test todo 2")).toBeInTheDocument();
  });
  it("Should render properly with an empty list", async () => {
    render(
      <Provider store={store}>
        <TodoList todos={[]} />
      </Provider>
    );
    screen.getByText("There is no todos, please add one.");
  });
});
