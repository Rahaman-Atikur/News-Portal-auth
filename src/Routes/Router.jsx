import { createBrowserRouter } from "react-router";
import Header from "../components/Header";

const router = createBrowserRouter(
    [
        {
            path: "/", element: <Header></Header>
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