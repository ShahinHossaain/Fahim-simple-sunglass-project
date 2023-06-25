import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Main/Main";
import Regular from "./Regular/Regular";
import Express from "./Express/Express";
import AllOrders from "./AllOrders/AllOrders";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <AllOrders />,
      },
      {
        path: "/regular",
        element: <Regular />,
      },
      {
        path: "/express",
        element: <Express />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
