import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Header tests suits", () => {
  it("Should display techno icons", () => {
    render(<Header />);
    const reactLogo = screen.getByTestId("react");
    const tailwindLogo = screen.getByTestId("tailwind");
    const nodeLogo = screen.getByTestId("node");
    expect(reactLogo).toBeInTheDocument();
    expect(tailwindLogo).toBeInTheDocument();
    expect(nodeLogo).toBeInTheDocument();
  });
});
