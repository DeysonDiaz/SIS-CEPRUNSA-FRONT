import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../Pages/Home"
import Profile from '../Pages/Profile'
import Dashboard from "../Pages/Dashboard";
import Login from "../Pages/Login";
import Create_course from "../Pages/Create_course";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [
        {
          path: "profile",
          element: <Profile />,
        },
        {
          path: "dashboard",
          element: <Dashboard />,
        },
        {
          path: "create-course",
          element: <Create_course />,
        },
      ],
    },
    {
      path: "login",
      element: <Login />,
    },
  ]);