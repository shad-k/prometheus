import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Header from ".";

test("clicking on search icon opens input", async () => {
  render(<Header />);

  await userEvent.click(screen.getByTestId("search-icon"));

  expect(screen.getByTestId("search-input")).toBeVisible();
});
