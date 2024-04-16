import { createBrowserRouter } from "react-router-dom";
import Root from "../../pages/root/Root";
import Home from "../../pages/home/Home";
import NotFound from "../../pages/not_found/NotFound";
import Login from "../../pages/login/Login";
import SignUp from "../../pages/signUp/SignUp";
import Profile from "../../components/profile/Profile";
import UpdateProfile from "../../components/updateProfile/UpdateProfile";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <NotFound></NotFound>,
        children: [
            {
                path: "/",
                element: <Home></Home>

            },
            {
                path: "/user/login",
                element: <Login></Login>
            },
            {
                path: "/user/signUp",
                element: <SignUp></SignUp>
            },
            {
                path: "/view-profile",
                element: <Profile></Profile>
            },
            {
                path: "/update-profile",
                element: <UpdateProfile></UpdateProfile>
            }
        ]
    }
])
