import { HomePage } from "../../copmponents/pages/Home";
import { MenuPage } from "../../copmponents/Pages/Menu";

export const routes = [{ title: 'Home', path: '/', component: <HomePage /> }, { title: 'Menu', path: '/menu', component: <MenuPage /> }, { title: 'Company', path: '/company', component:  <HomePage /> }, { title: 'Login', path: '/login', component: <HomePage /> }]