import { useContext } from "react"
import { AuthContext } from "../../contextProvider/ContextProvider"
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import Loading from "../../components/loading/Loading";

export default function PrivateRoute({ children }) {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <Loading></Loading>
    }
    if (user !== null) {
        return children

    }
    return <Navigate to="/user/login" state={location.pathname}></Navigate>
}
PrivateRoute.propTypes = {
    children: PropTypes.node
}
