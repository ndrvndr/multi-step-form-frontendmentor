import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SelectPlan from "./pages/selectPlan.jsx";
import PersonalInfo from "./pages/personalInfo.jsx";
import Addons from "./pages/addons";
import ErrorPage from "./pages/404";

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
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
