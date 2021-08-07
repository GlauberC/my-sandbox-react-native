import React from "react";
import { ThemeProvider } from "styled-components/native";
import { Base01 } from "./src/projects/01-base";
import { FontsProvider } from "./src/global/fonts";
import theme from "./src/global/styles/theme";

export default function App() {
  return (
    <FontsProvider>
      <ThemeProvider theme={theme}>
        <Base01 />
      </ThemeProvider>
    </FontsProvider>
  );
}
