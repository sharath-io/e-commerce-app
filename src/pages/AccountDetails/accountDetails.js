import { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import {AuthContext} from '../../contexts/authenticationContext';

export function AccountDetails(){
    const {userLogout} = useContext(AuthContext);
    return (
        <div>
            <h1>Account Details</h1>
            <NavLink to="/account-details/userDetails">User Details ||</NavLink>
            <NavLink to="/account-details/addressDetails">Address Details ||</NavLink>
            <NavLink to="/account-details/orderDetails">Order History ||</NavLink>
            <div> <Outlet/></div>
            <button onClick={userLogout} className="card-button">Logout</button>
        </div>
    )
}