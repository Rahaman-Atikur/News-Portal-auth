import { createBrowserRouter } from "react-router";
import Header from "../components/Header";
import HomeLayout from "../Layoutes/HomeLayout";
import Home from "../pages/Home";

const router = createBrowserRouter(
    [
        {
            path: "/", element: <HomeLayout></HomeLayout>,
            children: [
                {
                    path: "",
                    element: <Home></Home>
                },
                {
                    path: "/category/:id",
                    element: <Home></Home>
                }
            ]
        },
        {
            path: "/ok ", element: <h1>About Layout</h1>
        },
        {
            path: "/auth", element: <h1>Auth Layout</h1>
        }
    ]
)

export default router;