import todoSlice, { todoAdded } from "../todoSlice";
import { AnyAction } from "redux";
import { Todo } from "../../types/todo";

describe("TODO Slice", () => {
  it("Should have 0 todo in the initial state", () => {
    expect(todoSlice(undefined, {} as AnyAction)).toEqual([]);
  });
  it("Should be able to add a todo to an empty list", () => {
    expect(todoSlice(undefined, todoAdded("test"))).toEqual([
      {
        id: 0,
        text: "test",
        completed: false,
      } as Todo,
    ]);
  });
  it("Should be able to add a todo to an exisiting todo list", () => {
    const initState = [
      {
        id: 0,
        text: "test",
        completed: false,
      } as Todo,
    ];
    expect(todoSlice(initState, todoAdded("test"))).toEqual([
      ...initState,
      {
        id: 1,
        text: "test",
        completed: false,
      },
    ]);
  });
});
