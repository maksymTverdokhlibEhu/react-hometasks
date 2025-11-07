import { Route, Routes } from "react-router-dom";
import { routes } from "../const/routes.jsx";

export function Router() {
  return (
    <Routes>
      {
        routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.component} />
        ))
      }
    </Routes>
  );
}
