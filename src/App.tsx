import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import theme from "@/styles/theme";

import Layout from "./components/Layout";
import BrandDetail from "./routes/Brand/Detail";
import BrandList from "./routes/Brand/List";
import Cart from "./routes/Cart";
import Category from "./routes/Category";
import Community from "./routes/Community";
import Home from "./routes/Home";
import Join from "./routes/Join";
import LikeList from "./routes/Like";
import LikeBrandList from "./routes/Like/Brand";
import Login from "./routes/Login";
import MyPage from "./routes/MyPage";
import Order from "./routes/Order";
import GuestOrder from "./routes/Order/GuestOrder";
import MyReviewList from "./routes/Review/List";
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
            <Route path="products" element={<Category />} />
            <Route path="new" element={<Category />} />
            <Route path="best" element={<Category />} />
            <Route path="sale" element={<Category />} />
            <Route path="community" element={<Community />} />
            <Route path="order" element={<Order />} />
            <Route path="order/guest" element={<GuestOrder />} />
            <Route path="like/brands" element={<LikeBrandList />} />
            <Route path="like/products" element={<LikeList />} />
            <Route path="like/posts" element={<LikeList />} />
            <Route path="/myPage" element={<MyPage />} />
            <Route path="/myPage/reviews" element={<MyReviewList />} />
            <Route path="cart" element={<Cart />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/login/guestOrder" element={<Login />} />
          <Route path="/join" element={<Join />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}
