import { createBrowserRouter } from "react-router";
import Header from "../components/Header";
import HomeLayout from "../Layoutes/HomeLayout";
import Home from "../pages/Home";
import CategoryNews from "../pages/CategoryNews";
import AuthenticationLayout from "../Layoutes/AuthenticationLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NewsDetails from "../pages/NewsDetails";
const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <HomeLayout></HomeLayout>,
            children: [
                {
                    path: "",
                    element: <Home></Home>,
                },
                {
                    path: "/category/:id",
                    element: <CategoryNews></CategoryNews>,
                    loader: () => fetch("/news.json"),
                },
            ],
        },

        {
            path: "/auth",
            element: <AuthenticationLayout></AuthenticationLayout>,
            children: [
                {
                    path: "login",
                    element: <Login></Login>
                },
                {
                    path: "register",
                    element: <Register></Register>
                },
            ],
        },
        {
            path: "/news-details/:id",
            element: <NewsDetails></NewsDetails>
        },
        {
            path: "/*",
            element: <h2>Error</h2>
        },
    ]
);
export default router;