import { createBrowserRouter } from "react-router";
import Login from "./pages/Login.tsx";
import Register from "./pages/Register.tsx";
import Home from "./pages/Home.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/Register",
    element: <Register />,
  },
]);

export default router;
