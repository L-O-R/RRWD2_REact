import React from "react";
import {
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import { test, expect } from "vitest";
import TodoAPI from "./TodoAPI";
import { vi, describe } from "vitest";

describe("TodoAPI component", () => {
  beforeEach(() => {
    global.fetch = vi.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve([
            { id: 1, title: "Test Todo", completed: false },
          ]),
      })
    );
  });

  afterEach(() => {
    global.fetch.mockRestore();
  });

  it("renders loading initially and fetches todos", async () => {
    render(<TodoAPI />);
    expect(
      screen.getByText(/loading/i)
    ).toBeInTheDocument();
    await waitFor(() =>
      expect(
        screen.getByText("Test Todo")
      ).toBeInTheDocument()
    );
  });
});
