import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import theme from "@/styles/theme";

import Layout from "./components/Layout";
import BrandDetail from "./routes/Brand/Detail";
import BrandList from "./routes/Brand/List";
import Category from "./routes/Category";
import Community from "./routes/Community";
import Home from "./routes/Home";
import Join from "./routes/Join";
import Login from "./routes/Login";
import GlobalStyle from "./styles/GlobalStyle";

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="" element={<Home />} />
            <Route path="brands" element={<BrandList />} />
            <Route path="brands/:name" element={<BrandDetail />} />
            <Route path="category" element={<Category />} />
            <Route path="community" element={<Community />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/login/guestOrder" element={<Login />} />
          <Route path="/join" element={<Join />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}
