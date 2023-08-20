import { Route, Routes } from "react-router-dom"
import { publicRoutes } from "../Routes"

const AppRouter = () => {
    return (
        <Routes>
            {publicRoutes.map(({path, element}, index) =>
                <Route key={index} path={path} element={element} />
            )}
        </Routes>
    )
}

export default AppRouter