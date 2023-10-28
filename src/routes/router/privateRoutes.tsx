import { PropsWithChildren, lazy } from "react";
import { Navigate, RouteObject } from "react-router-dom";

import Layout from "@/components/Layout";

const Cart = lazy(() => import("@/routes/Cart"));
const Order = lazy(() => import("@/routes/Order"));
const OrderConfirm = lazy(() => import("@/routes/Order/OrderConfirm"));
const MyPage = lazy(() => import("@/routes/MyPage"));
const MyOrder = lazy(() => import("@/routes/MyOrder"));
const EditProfile = lazy(() => import("@/routes/MyPage/EditProfile"));
const MyReviewList = lazy(() => import("@/routes/Review/List"));
const Leave = lazy(() => import("@/routes/MyPage/Leave"));
const LikeList = lazy(() => import("@/routes/Like"));
const LikeBrandList = lazy(() => import("@/routes/Like/Brand"));

function PrivateRoute({ children }: PropsWithChildren) {
  // 로그인 검증 (refresh token 확인)
  const isLoggedIn = true; // 임시
  return isLoggedIn ? children : <Navigate to="/login" />;
}

export const privateRoutes: RouteObject[] = [
  {
    path: "",
    element: (
      <PrivateRoute>
        <Layout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "order",
        element: <Order />,
      },
      {
        path: "order/confirm",
        element: <OrderConfirm />,
      },
      {
        path: "myPage",
        element: <MyPage />,
      },
      {
        path: "myPage/order",
        element: <MyOrder />,
      },
      {
        path: "myPage/editProfile",
        element: <EditProfile />,
      },
      {
        path: "myPage/reviews",
        element: <MyReviewList />,
      },
      {
        path: "myPage/leave",
        element: <Leave />,
      },
      {
        path: "like/products",
        element: <LikeList />,
      },
      {
        path: "like/posts",
        element: <LikeList />,
      },
      {
        path: "like/brands",
        element: <LikeBrandList />,
      },
    ],
  },
];
