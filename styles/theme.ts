import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const breakpoints = createBreakpoints({
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em",
});

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    sun: "#f6b630",
    sand: "#fef0d5",
    white: "#ffffff",
  },
};

const fonts = {
  primary: {
    primary: "'Roboto', sans-serif",
    secondary: "",
  },
};

export const theme = extendTheme({ colors, fonts, breakpoints });
