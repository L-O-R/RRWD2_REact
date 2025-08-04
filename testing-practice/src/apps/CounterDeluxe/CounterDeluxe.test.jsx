import React from "react";
import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CounterDeluxe from "./CounterDeluxe";

describe("Couter Component", () => {
  test("Renders with the intial state which is 0", () => {
    render(<CounterDeluxe intialState={5} />);
    expect(
      screen.getByText(/Count is 5/i)
    ).toBeInTheDocument("Count is 0");
  });
});
