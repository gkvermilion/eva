import {
    ACCOUNT_ROUTE,
    ADMIN_ROUTE,
    BOOSTER_ROUTE,
    LOGIN_ROUTE,
    MAIN_PAGE_ROUTE,
    REGISTRATION_ROUTE,
    SHOP
} from "./utils/consts";
import Admin from "./pages/Admin";
import Booster from "./pages/Booster";
import MainPage from "./pages/MainPage";
import Auth from "./pages/Auth";
import Registration from "./pages/Registration";
import Shop from "./pages/Shop";
import AccountsPage from "./pages/AccountsPage";

export  const AdminRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: BOOSTER_ROUTE,
        Component: Booster
    }
]

export const publicRoutes = [
    {
        path: MAIN_PAGE_ROUTE,
        Component: MainPage
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Registration
    },
    {
        path: SHOP,
        Component: Shop
    },
    {
        path: ACCOUNT_ROUTE,
        Component: AccountsPage
    }
]