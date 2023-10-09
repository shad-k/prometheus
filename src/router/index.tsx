import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import AddLocation from "../pages/AddLocation";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/addLocation",
    element: <AddLocation />,
  },
]);

export default router;
