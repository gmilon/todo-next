import {
  render,
  screen,
  fireEvent,
  cleanup,
  act,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoItem from "../TodoItem";
import { Todo } from "../../../../types/todo";

describe("TODO Item", () => {
  it("Should render properly", () => {
    const todo: Todo = {
      id: 0,
      text: "test todo",
      completed: false,
    };
    render(<TodoItem todo={todo} />);
    expect(screen.getByText("test todo")).toBeInTheDocument();
  });
});
