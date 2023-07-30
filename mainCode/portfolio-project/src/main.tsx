import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
/*import "bootstrap/dist/css/bootstrap.css";*/
import "./scss/custom.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DevOpsPage from "./pages/DevOpsPage";
import BackEndpage from "./pages/BackEndpage";
import IoTPage from "./pages/IoTPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/DevOps",
    element: <DevOpsPage />,
  },
  {
    path: "/Backend",
    element: <BackEndpage />,
  },
  {
    path: "/IoT",
    element: <IoTPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
