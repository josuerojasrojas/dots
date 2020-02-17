import React from "react";
import { render } from "@testing-library/react";
import Dot from "./index.jsx";

describe("Dot Component", () => {
  test("it renders", () => {
    const DotComponent = render(<Dot />);
    expect(DotComponent).toBeDefined();
  });
});
