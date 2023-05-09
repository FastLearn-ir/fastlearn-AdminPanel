import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../Layouts/Index";

const Blogs = lazy(() => import('../Pages/Blogs/Blogs'));
const Category = lazy(() => import('../Pages/Category/Category'));
const Chapters = lazy(() => import('../Pages/Chapters/Chapters'));
const Courses = lazy(() => import('../Pages/Courses/Courses'));
const Episodes = lazy(() => import('../Pages/Episodes/Episodes'));
const Users = lazy(() => import('../Pages/Users/Users'));
const Roles = lazy(() => import('../Pages/Roles/Roles'));
const Permissions = lazy(() => import('../Pages/Permissions/Permissions'));
const ErrorPage = lazy(() => import('../Pages/Error/ErrorPage'));

const router = createBrowserRouter([
    {
        path: '/admin',
        errorElement: <ErrorPage/>,
        element: <MainLayout/>,
        children: [
            {
                path: 'blogs',
                element: <Blogs/>
            },
            {
                path: 'courses',
                element: <Courses/>
            },
            {
                path: 'category',
                element: <Category/>
            },
            {
                path: 'episodes',
                element: <Episodes/>
            },
            {
                path: 'chapters',
                element: <Chapters/>
            },
            {
                path: 'users',
                element: <Users/>
            },
            {
                path: 'roles',
                element: <Roles/>
            },
            {
                path: 'permissions',
                element: <Permissions/>
            }
        ]
    }
])

export default router;