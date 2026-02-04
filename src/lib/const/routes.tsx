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

export const routes = [
  { titleKey: "home", path: "/", component: <HomePage /> },
  { titleKey: "menu", path: "/menu", component: <MenuPage /> },
  { titleKey: "company", path: "/company", component: <HomePage /> },
  { titleKey: "login", path: "/login", component: <LoginPage /> },
  { titleKey: "order", path: "/order", component: (
      <ProtectedAuthRoute>
        <Order />
      </ProtectedAuthRoute>
    ),
  },
];
