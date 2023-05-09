import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../Layouts/Index";
import { Blogs, ErrorPage } from "../Pages/Index";

const router = createBrowserRouter([
    {
        path: '/admin',
        errorElement: <ErrorPage/>,
        element: <MainLayout/>,
        children: [
            {
                path: 'blogs',
                element: <Blogs/>
            }
        ]
    }
])

export default router;