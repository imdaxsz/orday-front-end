import { lazy } from "react";
import { RouteObject } from "react-router-dom";

import Layout from "@/components/Layout";

import Home from "../Home";

const BrandDetail = lazy(() => import("@/routes/Brand/Detail"));
const BrandList = lazy(() => import("@/routes/Brand/List"));
const Product = lazy(() => import("@/routes/Product"));
const Category = lazy(() => import("@/routes/Category"));
const Community = lazy(() => import("@/routes/Community"));
const CommunityDetail = lazy(() => import("@/routes/Community/Detail"));
const Join = lazy(() => import("@/routes/Join"));
const Login = lazy(() => import("@/routes/Login"));
const Logout = lazy(() => import("@/routes/Logout"));
const NotFound = lazy(() => import("@/routes/NotFound"));

export const publicRoutes: RouteObject[] = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/login/guestOrder",
    element: <Login />,
  },
  {
    path: "/join",
    element: <Join />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "brands",
        element: <BrandList />,
      },
      {
        path: "brands/:id",
        element: <BrandDetail />,
      },
      {
        path: "products",
        element: <Category />,
      },
      {
        path: "new",
        element: <Category />,
      },
      {
        path: "best",
        element: <Category />,
      },
      {
        path: "sale",
        element: <Category />,
      },
      {
        path: "product/:id",
        element: <Product />,
      },
      {
        path: "community",
        element: <Community />,
      },
      {
        path: "community/tips/:id",
        element: <CommunityDetail />,
      },
      {
        path: "community/reviews/:id",
        element: <CommunityDetail />,
      },
      {
        path: "/logout",
        element: <Logout />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
];
