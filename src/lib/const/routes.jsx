import { MenuPage } from "../../copmponents/Pages/Menu";
import { LoginPage } from "../../copmponents/Pages/Login";
import { HomePage } from "../../copmponents/Pages/Home";
import { Order } from "../../copmponents/Pages/Order/Order";
import { ProtectedAuthRoute } from "../../copmponents/Shared/ProtectedRoute";

export const routes = [
  { title: "Home", path: "/", component: <HomePage /> },
  { title: "Menu", path: "/menu", component: <MenuPage /> },
  { title: "Company", path: "/company", component: <HomePage /> },
  { title: "Login", path: "/login", component: <LoginPage /> },
  {
    title: "Order",
    path: "/order/:id",
    component: (
      <ProtectedAuthRoute>
        <Order />
      </ProtectedAuthRoute>
    ),
  },
];
