import { useContext } from "react"
import { useLocation } from "react-router-dom";
import { Navigate } from "react-router";

import { AuthContext } from ".."

export function RequiredAuth({children}){
    const {authState} = useContext(AuthContext)
    const location = useLocation();
    return authState.isLoggedIn ? (children) : <Navigate to="/login" state={{from: location}}/>
}