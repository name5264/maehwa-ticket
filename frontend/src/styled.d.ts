import "styled-components";
import { colorTheme, fontTheme } from "./theme";

declare module "styled-components" {
  export interface DefaultTheme {
    color: colorTheme;
    font: fontTheme;
  }
}
