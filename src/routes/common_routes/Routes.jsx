import { createBrowserRouter } from "react-router-dom";
import Root from "../../pages/root/Root";
import Home from "../../pages/home/Home";
import NotFound from "../../pages/not_found/NotFound";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <NotFound></NotFound>,
        children: [
            {
                path: "/",
                element: <Home></Home>

            }
        ]
    }
])
