import { createBrowserRouter, Outlet } from "react-router";
import Login from "./pages/Login.tsx";
import Register from "./pages/Register.tsx";
import Header from "./components/Header.tsx";
import Home from "./pages/Home.tsx";
import Pedidos from "./pages/Pedidos.tsx";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/pedidos",
        element: <Pedidos />,
      },
    ],
  },

  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;
