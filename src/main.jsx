import { createRoot } from "react-dom/client";
import "./main.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/index.jsx";

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
