import { Navigate } from "react-router-dom";
import CopyrightPage from "./pages/CopyrightPage";
import FilterPage from "./pages/FilterPage";
import MainPage from "./pages/MainPage";
import SearchPage from "./pages/SearchPage";
import VideoPage from "./pages/VideoPage";
import { CopyrightRoute, DefaultRoute, ErrorRoute, FilterRoute, SearchRoute, WatchRoute } from "./tools/Consts";
import Page404 from "./pages/Page404";

export const publicRoutes = [
    {
        path: DefaultRoute,
        element: <MainPage />
    },
    {
        path: CopyrightRoute,
        element: <CopyrightPage />
    },
    {
        path: FilterRoute,
        element: <FilterPage />
    },
    {
        path: WatchRoute,
        element: <VideoPage />
    },
    {
        path: SearchRoute, 
        element: <SearchPage />
    },
    {
        path: ErrorRoute,
        element: <Page404 />
    },
    {
        path: '*',
        element: <Navigate to={ErrorRoute} replace/>
    }
]