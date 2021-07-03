import { render } from "@testing-library/react";
import { Maingrid } from "../contexts/Maingrid/Maingrid";
export * from "@testing-library/react";

const renderWithContext = (ui, options) => render(ui, { wrapper: Maingrid, ...options });

// re-export everything
export * from "@testing-library/react";

//override render method
export { renderWithContext as render };
