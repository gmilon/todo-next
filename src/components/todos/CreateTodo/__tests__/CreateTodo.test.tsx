import React from "react";
import {
  render,
  screen,
  fireEvent,
  cleanup,
  act,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import CreateTodo from "../CreateTodo";

describe("Create TODO", () => {
  const mockCallback = jest.fn();
  beforeEach(() => {
    render(<CreateTodo onCreate={mockCallback} />);
  });
  afterEach(cleanup);
  // health
  it("Should render CreateTodo component Properly (form, input, button)", () => {
    expect(screen.getByPlaceholderText("Add your todo")).toBeInTheDocument();
    expect(screen.getByTestId("create-todo-form")).toBeInTheDocument();
    expect(screen.getByRole("button")).toHaveProperty("type", "submit");
  });
  // negative scenarios
  it("Should show an error if we submit an empty todo", async () => {
    const button = screen.getByText("Add");
    await act(async () => {
      fireEvent.submit(button);
    });
    expect(screen.getByText("Please fill your todo")).toBeInTheDocument();
  });
  it("Should not trigger the submit handler", async () => {
    const button = screen.getByText("Add");
    await act(async () => {
      fireEvent.submit(button);
    });
    expect(mockCallback).not.toBeCalled();
  });
  // positive flow
  it("Should trigger onCreate when the form is submitted", async () => {
    const input: HTMLInputElement = screen.getByTestId("todo-text-input");
    const button = screen.getByText("Add");
    fireEvent.change(input, { target: { value: "tagada" } });
    expect(input.value).toBe("tagada");
    await act(async () => {
      fireEvent.submit(button);
    });
    expect(mockCallback).toBeCalled();
  });
  it("Should empty the input on todo Creation", async () => {
    const input: HTMLInputElement = screen.getByTestId("todo-text-input");
    const button = screen.getByText("Add");
    fireEvent.change(input, { target: { value: "tagada" } });
    expect(input.value).toBe("tagada");
    await act(async () => {
      fireEvent.submit(button);
    });
    expect(input.value).toEqual("");
  });
});
