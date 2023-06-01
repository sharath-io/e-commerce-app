import { useContext } from "react"
import { AuthContext } from ".."
import { useLocation } from "react-router-dom"
import { Navigate } from "react-router";

export function RequiredAuth({children}){
    const {isLoggedIn} = useContext(AuthContext)
    const location = useLocation();
    return isLoggedIn ? children : <Navigate to="/login" state={{from:location}}/>
}