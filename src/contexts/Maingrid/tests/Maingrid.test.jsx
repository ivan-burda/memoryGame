import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Maingrid from "../Maingrid";

test("An initial grid with 24 covered cards is displayed", () => {
  render(<Maingrid />);
  const cards = screen.getAllByRole("img", { name: /cardback/ });
  expect(cards).toHaveLength(24);
});
