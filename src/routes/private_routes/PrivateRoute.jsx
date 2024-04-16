import { useContext } from "react"
import { AuthContext } from "../../contextProvider/ContextProvider"
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

export default function PrivateRoute({ children }) {
    console.log(children);
    const { user } = useContext(AuthContext);
    const location = useLocation();
    if (user !== null) {
        return children

    }
    return <Navigate to="/user/login" state={location.pathname}></Navigate>
}
PrivateRoute.propTypes = {
    children: PropTypes.node
}
