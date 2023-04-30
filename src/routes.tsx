import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";

import Layout from "./pages/Layout";
const Home = lazy(() => import("./pages/home-page/HomePage"));
const CheckOut = lazy(() => import("./pages/checkout-page/CheckOut"));

const ShopCategory = lazy(
  () => import("./pages/shop-category-page/ShopCategoryPage")
);
const ShopCategoryPreview = lazy(
  () => import("./pages/shop-category-preview-page/ShopCategoryPreview")
);
const Auth = lazy(() => import("./pages/auth-page/AuthPage"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "shop", element: <ShopCategoryPreview /> },
      { path: "shop/:slug", element: <ShopCategory /> },
      { path: "auth", element: <Auth /> },
      { path: "checkout", element: <CheckOut /> },
    ],
  },
]);

export default router;
