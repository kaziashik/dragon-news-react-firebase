import { Component } from "react";
import { createBrowserRouter } from "react-router";
import Home from "../Components/Home/Home";
import HomeLayout from "../layouts/HomeLayout";
import CategoryNews from "../layouts/CategoryNews";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AuthLayout from "../Components/Homelayout/AuthLayout";
import NewsDetails from "../pages/NewsDetails";
import PrivatRout from "../provider/PrivatRout";
import Loding from "../pages/Loding";
import ForgetPassword from "../pages/ForgetPassword";
import Profile from "../pages/Profile";




const router = createBrowserRouter(
    [
        {
            path: "/",
            Component: HomeLayout,
            loader: () => fetch("/news.json"),
            children: [
                {
                    index: true,
                    element: <Home></Home>
                },
                {
                    path: "/category/:id",
                    element: <CategoryNews></CategoryNews>,
                    hydrateFallbackElement: <Loding></Loding>
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
                },
                {
            path: '/auth/profile',
            element: <PrivatRout>
                <Profile></Profile>
                </PrivatRout>

        },

                {
                    path: "/auth/resetpasswrod",
                    element:
                        <ForgetPassword></ForgetPassword>

                }
            ]

        },
        {
            path: "/news-details/:id",
            element: <PrivatRout>
                <NewsDetails></NewsDetails>
            </PrivatRout>,
            loader: () => fetch("/news.json"),
            hydrateFallbackElement: <Loding></Loding>
        },
        

        {
            path: "/*",
            element: <h2>Error404</h2>
        }
    ]);

export default router