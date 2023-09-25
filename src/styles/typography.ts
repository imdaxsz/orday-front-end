import { css } from "styled-components";

const BOLD = 700;
const MEDIUM = 500;
const REGULAR = 400;

const generateTypography = (size: number, weight: number) => css`
  font-family: "Pretendard", "sans-serif", "system-ui";
  font-style: normal;
  line-height: normal;
  font-weight: ${weight};
  font-size: ${size}px;
`;

export type Typography = typeof typo;

export const typo = {
  "heading-1": generateTypography(35, BOLD),

  "title-1-b": generateTypography(22, BOLD),
  "title-2-b": generateTypography(20, BOLD),

  "body-1-b": generateTypography(18, BOLD),
  "body-1-m": generateTypography(18, MEDIUM),
  "body-1-r": generateTypography(18, REGULAR),

  "body-2-b": generateTypography(16, BOLD),
  "body-2-m": generateTypography(16, MEDIUM),
  "body-2-r": generateTypography(16, REGULAR),

  "body-3-b": generateTypography(14, BOLD),
  "body-3-m": generateTypography(14, MEDIUM),
  "body-3-r": generateTypography(14, REGULAR),

  "body-4-b": generateTypography(12, BOLD),
  "body-4-m": generateTypography(12, MEDIUM),
  "body-4-r": generateTypography(12, REGULAR),

  "micro-m": generateTypography(10, MEDIUM),
  "micro-r": generateTypography(10, REGULAR),
} as const;
