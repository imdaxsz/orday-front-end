import { PropsWithChildren, lazy } from "react";
import { Navigate, RouteObject } from "react-router-dom";

import Layout from "@/components/Layout";

const Cart = lazy(() => import("@/routes/Cart"));
const Order = lazy(() => import("@/routes/Order"));
const OrderConfirm = lazy(() => import("@/routes/Order/OrderConfirm"));
const MyPage = lazy(() => import("@/routes/MyPage"));
const OrderList = lazy(() => import("@/routes/MyPage/OrderList"));
const EditProfile = lazy(() => import("@/routes/MyPage/EditProfile"));
const MyReviewList = lazy(() => import("@/routes/Review/List"));
const WriteReview = lazy(() => import("@/routes/Review/Write"));
const Logout = lazy(() => import("@/routes/Logout"));
const Leave = lazy(() => import("@/routes/MyPage/Leave"));
const LikeProductList = lazy(() => import("@/routes/Like/Products"));
const LikeBrandList = lazy(() => import("@/routes/Like/Brand"));

function PrivateRoute({ children }: PropsWithChildren) {
  const isLoggedIn = localStorage.getItem("token");
  return isLoggedIn ? children : <Navigate to="/login" replace />;
}

export const privateRoutes: RouteObject[] = [
  {
    path: "/",
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
        element: <OrderList />,
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
        path: "review/write",
        element: <WriteReview />,
      },
      {
        path: "logout",
        element: <Logout />,
      },
      {
        path: "myPage/leave",
        element: <Leave />,
      },
      {
        path: "like/products",
        element: <LikeProductList />,
      },
      {
        path: "like/brands",
        element: <LikeBrandList />,
      },
    ],
  },
];
