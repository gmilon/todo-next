import React from "react";
import { cleanup, render } from "@testing-library/react";
import Home from "../pages";
import { Provider } from "react-redux";
import { store } from "../src/store/store";

describe("Home Page", () => {
  afterEach(cleanup);
  test("renders Home Page Properly", () => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );
  });
});
