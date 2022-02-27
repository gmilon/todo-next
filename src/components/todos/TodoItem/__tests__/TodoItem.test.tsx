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
    render(<TodoItem todo={todo} onDelete={() => {}} />);
    expect(screen.getByText("test todo")).toBeInTheDocument();
  });
  it("should tigger the on remove callback by clicking on the close icon", () => {
    const callback = jest.fn((todo: Todo) => {});
    const todo: Todo = {
      id: 0,
      text: "test todo",
      completed: false,
    };
    render(<TodoItem todo={todo} onDelete={callback} />);
    const button = screen.getByTestId("delete-item");
    fireEvent.click(button);
    expect(callback).toHaveBeenCalled();
  });
});
