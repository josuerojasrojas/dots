import React from "react";
import { render } from "@testing-library/react";
import DotsCollection from "./index.jsx";
import Dot from "components/Dot";

describe("DotsCollection Component", () => {
  const length = 2;
  const width = 2;
  const DotsCollectionComponent = render(
    <DotsCollection length={length} width={width} />
  );

  test("it renders", () => {
    expect(DotsCollectionComponent).toBeDefined();
  });
});
