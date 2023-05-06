import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../Layouts/Index";
import { ErrorPage } from "../Pages/Index";

const router = createBrowserRouter([
    {
        path: '/admin',
        errorElement: <ErrorPage/>,
        element: <MainLayout/>
    }
])

export default router;