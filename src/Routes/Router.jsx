import { createBrowserRouter } from "react-router";
import Header from "../components/Header";
import HomeLayout from "../Layoutes/HomeLayout";

const router = createBrowserRouter(
    [
        {
            path: "/", element: <HomeLayout></HomeLayout>
        },
        {
            path:"/ok ", element: <h1>About Layout</h1>
        },
        {
            path:"/auth" , element: <h1>Auth Layout</h1>
        }
    ]
)

export default router;