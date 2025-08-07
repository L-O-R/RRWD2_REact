import React from "react";
import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import CounterDeluxe from "./CounterDeluxe";
import userEvent from "@testing-library/user-event";
describe("Couter Component", () => {
  test("Renders with the intial state which is 0", () => {
    render(<CounterDeluxe intialState={0} />);
    expect(
      screen.getByText(/count is 0/i)
    ).toBeInTheDocument("Count is 0");
  });

  test("Increment By one", async () => {
    render(<CounterDeluxe intialState={0} />);
    const incBtn = screen.getByRole("button", {
      name: "Increment",
    });
    expect(
      screen.getByText(/Count is 0/i)
    ).toBeInTheDocument();

    await userEvent.click(incBtn);

    expect(
      screen.getByText(/Count is 1/i)
    ).toBeInTheDocument();
  });
  test("Decrement By one", async () => {
    render(<CounterDeluxe intialState={0} />);
    const decBtn = screen.getByRole("button", {
      name: "Decrement",
    });
    expect(
      screen.getByText(/Count is 0/i)
    ).toBeInTheDocument();

    await userEvent.click(decBtn);

    expect(
      screen.getByText(/Count is -1/i)
    ).toBeInTheDocument();
  });
});
