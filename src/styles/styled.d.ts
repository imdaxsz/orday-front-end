import "styled-components";
import { Colors } from "./colors";
import { Typography } from "./theme";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: Colors;
    typo: Typography;
  }
}
