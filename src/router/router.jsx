import { Component } from "react";
import { createBrowserRouter } from "react-router";
import Home from "../Components/Home/Home";
import HomeLayout from "../layouts/HomeLayout";
import CategoryNews from "../layouts/CategoryNews";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AuthLayout from "../Components/Homelayout/AuthLayout";




 const router= createBrowserRouter(
 [
    {
        path:"/",
        Component: HomeLayout,
        children: [
            {
                path: "",
                element: <Home></Home>
            },
            {
                path: "/category/:id",
                element: <CategoryNews></CategoryNews>,
                loader: ()=>fetch("/news.json")
            }
        ]
    },
    {
        path: "/auth",
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: "/auth/login",
                element: <Login></Login>
            },
            {
                path: "/auth/register",
                element: <Register></Register>
            }
        ]

    },
    {
        path: "/news",
        element: <h2>newspage</h2>
    },

    {
        path: "/*",
        element: <h2>Error404</h2>
    }
 ]);

 export default router