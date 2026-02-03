import { MenuPage } from "../../copmponents/Pages/Menu/index";
import { LoginPage } from "../../copmponents/Pages/Login/index";
import { HomePage } from "../../copmponents/Pages/Home/index";
import { Order } from "../../copmponents/Pages/Order/Order";
import { ProtectedAuthRoute } from "../../copmponents/Shared/ProtectedRoute";

type RouteEl = {
  title: string;
  path: string;
  component: React.ReactNode;
};

export const routes: RouteEl[] = [
  { title: "Home", path: "/", component: <HomePage /> },
  { title: "Menu", path: "/menu", component: <MenuPage /> },
  { title: "Company", path: "/company", component: <HomePage /> },
  { title: "Login", path: "/login", component: <LoginPage /> },
  {
    title: "Order",
    path: "/order",
    component: (
      <ProtectedAuthRoute>
        <Order />
      </ProtectedAuthRoute>
    ),
  },
];
