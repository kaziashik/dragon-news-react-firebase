import { Component } from "react";
import { createBrowserRouter } from "react-router";
import Home from "../Components/Home/Home";
import HomeLayout from "../layouts/HomeLayout";
import CategoryNews from "../layouts/CategoryNews";




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
        element: <h2> auth provider</h2>
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