import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Infos from "./pages/Infos";
// import des pages

import Home from "./pages/Home";
import Ressources from "./pages/Ressources";
import Events from "./components/Events";
import Discussion from "./pages/Discussion";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/ressources",
        element: <Ressources />,
      },
      {
        path: "/events",
        element: <Events />,
      },
      {
        path: "/discussion",
        element: <Discussion />,
      },
      {
        path: "infos",
        element: <Infos />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
