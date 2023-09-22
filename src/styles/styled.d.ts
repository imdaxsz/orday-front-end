import "styled-components";
import { ColorsTypes, Typography } from "./theme";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: ColorsTypes;
    typo: Typography;
  }
}
