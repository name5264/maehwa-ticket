import { DefaultTheme } from "styled-components";

export class Font {
  font: string;
  weight: number;
  constructor(fontName: string, weight: number) {
    this.font = fontName;
    this.weight = weight;
  }

  toFontName(useSansSerif: boolean = true) {
    return `"${this.font}" ${useSansSerif ? "sans-serif" : ""}`;
  }

  toFontNameWithAppleGothicNeo(useSansSerif: boolean = true) {
    return `${this.font}, "Apple SD Gothic Neo", ${
      useSansSerif ? "sans-serif" : ""
    }`;
  }

  toWeight() {
    return this.weight;
  }
}

export class Color {
  color: number[];
  constructor(color1: number | string, color2?: number, color3?: number) {
    if (typeof color1 === "string") {
      const hex = color1.trim().replace("#", "");
      const preRgb =
        hex.length === 3 ? hex.match(/[a-f\d]/gi) : hex.match(/[a-f\d]{2}/gi);

      const rgb = preRgb?.map((str, x) => {
        if (str.length == 1) str = str + str;
        return parseInt(str, 16);
      });

      if (rgb) {
        this.color = rgb;
      } else {
        throw new Error("유효하지 않은 hex");
      }
    } else if (color2 && color3 && typeof color1 === "number") {
      this.color = [color1, color2, color3];
    } else {
      throw new Error("유효하지 않은 색상");
    }
  }

  toRGB() {
    return `rgb(${this.color[0]}, ${this.color[1]}, ${this.color[2]})`;
  }

  toRGBA(Alpha: number) {
    return `rgba(${this.color[0]}, ${this.color[1]}, ${this.color[2]}, ${Alpha})`;
  }
}

export const colorTheme = {
  background: new Color(255, 255, 255),
  text: new Color(1, 1, 1),
  border: new Color(1, 1, 1),
  point: new Color(52, 112, 247),
  white: new Color(255, 255, 255),
};

export const fontTheme = {
  title: new Font("Noto Sans KR", 700),
};

export type colorTheme = typeof colorTheme;
export type fontTheme = typeof fontTheme;

const theme = {
  color: colorTheme,
  font: fontTheme,
};

export default theme;
