import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SelectPlan from "./pages/selectPlan.jsx";
import PersonalInfo from "./pages/personalInfo.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PersonalInfo />,
  },
  {
    path: "/plan",
    element: <SelectPlan />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
