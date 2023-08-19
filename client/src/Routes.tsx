import CopyrightPage from "./pages/CopyrightPage";
import FilterPage from "./pages/FilterPage";
import MainPage from "./pages/MainPage";
import SearchPage from "./pages/SearchPage";
import VideoPage from "./pages/VideoPage";
import { CopyrightRoute, DefaultRoute, FilterRoute, SearchRoute, WatchRoute } from "./tools/Consts";

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
        path: WatchRoute, //+ '/:uuid',
        element: <VideoPage />
    },
    {
        path: SearchRoute, 
        element: <SearchPage />
    }
]