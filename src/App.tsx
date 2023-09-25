import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import theme from "@/styles/theme";

import Layout from "./components/Layout";
import Category from "./routes/Category";
import Home from "./routes/Home";
import GlobalStyle from "./styles/GlobalStyle";

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="" element={<Home />} />
            <Route path="category" element={<Category />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </>
  );
}
