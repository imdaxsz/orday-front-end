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
    "100": "#111111",
    "90": "#383838",
    "80": "#444444",
    "70": "#555555",
    "40": "#999999",
    "20": "#efefef",
  },
};

export type ColorsTypes = typeof colors;

const theme = {
  typo,
  colors,
};

export default theme;
