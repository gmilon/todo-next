import { render, screen, fireEvent, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoItemStore from "../TodoItemStore";
import { Provider } from "react-redux";
import { configureAppStore } from "../../../../store/store";
import { todoAdded, todoRemoved } from "../../../../store/todoSlice";

describe("TODO Item Store", () => {
  it("Should render properly", async () => {
    const store = configureAppStore();
    await store.dispatch(todoAdded("test todo"));
    render(
      <Provider store={store}>
        <TodoItemStore todo={store.getState().todo[0]} />
      </Provider>
    );
    expect(screen.getByText("test todo")).toBeInTheDocument();
  });
  it("Should delete todo from store on delete", async () => {
    const store = configureAppStore();
    await store.dispatch(todoAdded("test todo"));
    render(
      <Provider store={store}>
        <TodoItemStore todo={store.getState().todo[0]} />
      </Provider>
    );
    const button = screen.getByTestId("delete-item");
    await act(async () => {
      fireEvent.click(button);
    });
    expect(store.getState().todo).toEqual([]);
  });
});
