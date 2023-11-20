import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./LayOut/MainLayout";
import Home from "./Pages/Home/Home";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import PassForget from "./Components/PassForget/PassForget";
import SeeMore from "./Components/SeeMore/SeeMore";
import About from "./Components/About/About";
import Career from "./Components/Career/Career";
import AuthProvider from "./Components/AuthProvider/AuthProvider";
import PrivateRoute from "./Pages/PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,

    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/data/categories.json"),
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/career",
        element: <Career></Career>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/reset",
        element: <PassForget></PassForget>,
      },
      {
        path: "/news/:id",
        element: (
          <PrivateRoute>
            <SeeMore></SeeMore>
          </PrivateRoute>
        ),
        loader: () => fetch("/data/news.json"),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
