import { squareBalance } from "./balanceFunctions";
import { CIRCLE_COLORS_ZONE16 } from "./constants";

describe("balanceFunction squareBalance test", () => {
  const data = {
    length: 12,
    width: 12,
    zoneLength: 4,
    x: 0,
    y: 0
  };

  test(`returns color ${CIRCLE_COLORS_ZONE16[0]} on (0, 0) dot`, () => {
    expect(squareBalance(data)).toBe(CIRCLE_COLORS_ZONE16[0]);
  });

  test(`return color ${CIRCLE_COLORS_ZONE16[2]} on (6, 0)`, () => {
    expect(squareBalance({ ...data, x: 6, y: 0 })).toBe(
      CIRCLE_COLORS_ZONE16[2]
    );
  });
});
