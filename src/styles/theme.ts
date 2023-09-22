import { DefaultTheme } from "styled-components";

const typo = {
  // 추가 예정
};

const colors = {
  primary: {
    "100": "#00a964",
    "60": "#6ee266",
    "40": "#46f2aa",
    "20": "#e0ffdd",
  },
  secondary: "#4681f2",
  neutral: {
    "100": "#1d1d1d",
    "90": "#303030",
    "80": "#444444",
    "70": "#6c6c6c",
    "40": "#999999",
    "20": "#efefef",
    "10": "#f8f8f8",
  },
};

export type Typography = typeof typo;
export type ColorsTypes = typeof colors;

const theme: DefaultTheme = {
  typo,
  colors,
};

export default theme;
