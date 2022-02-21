import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Layout from "../Layout";
import { Text } from "@chakra-ui/react";

describe("App", () => {
  test("renders Layout component with children", () => {
    render(
      <Layout>
        <Text>Hello World</Text>
      </Layout>
    );
    expect(screen.getByText("Hello World")).toBeInTheDocument();
  });
});
