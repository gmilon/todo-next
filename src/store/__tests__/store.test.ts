import { store } from "../store";

describe("Store", () => {
  it("Should include the todoReducer", () => {
    expect(store.getState()).toHaveProperty("todo");
  });
});
