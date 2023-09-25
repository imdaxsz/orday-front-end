import { DefaultTheme } from "styled-components";

import { colors } from "./colors";
import { typo } from "./typography";

export type Typography = typeof typo;

const theme: DefaultTheme = {
  typo,
  colors,
};

export default theme;
