import { CIRCLE_COLORS_ZONE16 } from "./constants";

export const squareBalance = ({ length, width, x, y, zoneLength }) => {
  // y * L + x - (L - W) * y;
  // but a square is = y * L + x
  const xZone = width / zoneLength;
  const yZone = length / zoneLength;
  const _y = Math.floor(y / yZone);
  const _x = Math.floor(x / xZone);
  const dotZone = Math.floor(_y * zoneLength + _x);
  return CIRCLE_COLORS_ZONE16[dotZone];
};

export const rectBalance = ({ length, width, x, y, zoneLength, zoneWidth }) => {
  // y * L + x - (L - W) * y;
  const xZone = width / zoneWidth;
  const yZone = length / zoneLength;
  const _y = Math.floor(y / yZone);
  const _x = Math.floor(x / xZone);
  const dotZone = Math.floor(
    _y * zoneLength + _x - (zoneLength - zoneWidth) * _y
  );
  return CIRCLE_COLORS_ZONE16[dotZone];
};

export const balanceColor2 = _ => {
  return rectBalance({ ..._, zoneLength: 2, zoneWidth: 1 });
};

export const balanceColor4 = _ => {
  return squareBalance({ ..._, zoneLength: 2 });
};

export const balanceColor6 = _ => {
  return rectBalance({ ..._, zoneLength: 2, zoneWidth: 3 });
};

export const balanceColor8 = _ => {
  return rectBalance({ ..._, zoneLength: 2, zoneWidth: 4 });
};

export const balanceColor12 = _ => {
  return rectBalance({ ..._, zoneLength: 2, zoneWidth: 6 });
};

export const balanceColor16 = _ => {
  return squareBalance({ ..._, zoneLength: 4 });
};
