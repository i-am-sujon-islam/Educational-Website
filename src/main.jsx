import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import AboutUs from "./components/aboutus.jsx";
import Home from "./components/Home.jsx";
import NotFount from "./components/NotFount.jsx";
import Students from "./components/Students.jsx";

const Layout = () => {
  return (
    <div className="">
      <App />
      <Outlet />
    </div>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/students",
        element: <Students />,
      },
      {
        path: "*",
        element: <NotFount />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);