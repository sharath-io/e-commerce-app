import { useContext } from "react"
import { NavLink } from "react-router-dom"

import './navbar.css';
import {DataContext,AuthContext} from '../..';

export function Navbar(){
    const {state} = useContext(DataContext);
    const {authState} = useContext(AuthContext);
    return (
        <div>
            <p className="header">FREE SHIPPING AND RETURNS ON ALL META DEVICES!</p>
            <div className="nav-container">
              <NavLink to="/"  className="nav-link">Meta-Store</NavLink>
              <nav className="nav-bar">
               <NavLink to="/products" className="nav-link">Products </NavLink>
               <NavLink to="/wishlist" className="nav-link">Wishlist ({state.wishlist.length})</NavLink>
               <NavLink to="/cart" className="nav-link">Cart ({state.cart.reduce((totalCart,product) => totalCart+product.qty,0)})</NavLink>
               <NavLink to={authState.isLoggedIn ? "/account-details/userDetails" : "/login"} className="nav-link"> {authState.isLoggedIn ? 'Profile' : 'Login' }</NavLink>
              </nav>
            </div>
            
        </div>
    )
}