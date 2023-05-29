import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SelectPlan from "./pages/selectPlan.jsx";
import PersonalInfo from "./pages/personalInfo.jsx";
import Addons from "./pages/addons";
import ErrorPage from "./pages/404";
import Finishing from "./pages/finishing";
import Succeed from "./pages/succeed";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PersonalInfo />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/plan",
    element: <SelectPlan />,
  },
  { path: "/plan/addons", element: <Addons /> },
  { path: "/plan/addons/finishing", element: <Finishing /> },
  { path: "/plan/addons/finishing/succeed", element: <Succeed /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
