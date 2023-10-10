import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import theme from "@/styles/theme";

import Layout from "./components/Layout";
import BrandDetail from "./routes/Brand/Detail";
import BrandList from "./routes/Brand/List";
import Category from "./routes/Category";
import Home from "./routes/Home";
import Join from "./routes/Join";
import Login from "./routes/Login";
import Order from "./routes/Order";
import GuestOrder from "./routes/Order/GuestOrder";
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
            <Route path="order" element={<Order />} />
            <Route path="order/guest" element={<GuestOrder />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/login/guestOrder" element={<Login />} />
          <Route path="/join" element={<Join />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}
