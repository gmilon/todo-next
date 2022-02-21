import React from "react";
import {
  render,
  screen,
  fireEvent,
  cleanup,
  act,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import CreateTodoStore from "../CreateTodoStore";
import { Provider } from "react-redux";
import { store } from "../../../../store/store";

describe("Create TODO Store", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <CreateTodoStore />
      </Provider>
    );
  });
  afterEach(cleanup);
  // health
  it("Should render the component", () => {
    expect(screen.getByPlaceholderText("Add your todo")).toBeInTheDocument();
  });
  it("Should not store data on invalid submit", async () => {
    const button = screen.getByText("Add");
    await act(async () => {
      fireEvent.submit(button);
    });
    expect(store.getState().todo).toEqual([]);
  });
  it("Should store data in the store on create todo submit", async () => {
    const input: HTMLInputElement = screen.getByTestId("todo-text-input");
    const button = screen.getByText("Add");
    fireEvent.change(input, { target: { value: "tagada" } });
    expect(input.value).toBe("tagada");
    await act(async () => {
      fireEvent.submit(button);
    });
    expect(store.getState().todo).toEqual([
      {
        id: 0,
        text: "tagada",
        completed: false,
      },
    ]);
  });
});
