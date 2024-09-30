// routes.js
import { createBrowserRouter } from "react-router-dom";
import Home from "../views/Home";
// import Contact from "../views/Contact";
import Navigation from "../components/Navigation";

import App from "../App";
import Login from "../views/Login";
import Register from "../views/Register";
import Collection from "../views/Collections";
import ProductPage from "../views/ProductPage";
import Cart from "../views/Cart";
import Checkout from "../views/Checkout";
import OrderHistory from "../views/OrderHistory";
import NotFoundPage from "../views/404";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        element: <Navigation />,
        children: [
          {
            path: "/",
            element: <Home />,
          },
          {
            path: "/contact",
            // element: <Contact />,
          },
          {
            path: "/collections/categories/:category?",
            element: <Collection />,
          },
          {
            path: "/collections/:productId",
            element: <ProductPage />,
          },
          {
            path: "/cart",
            element: <Cart />,
          },
          {
            path: "/check-out",
            element: <Checkout />,
          },
          {
            path: "/order-history",
            element: <OrderHistory />,
          },
          {
            path: "*",
            element: <NotFoundPage />,
          },
        ],
      },

      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
