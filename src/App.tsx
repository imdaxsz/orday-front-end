import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import theme from "@/styles/theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<h2>home</h2>} />
      </Routes>
    </ThemeProvider>
  );
}
