import { useContext } from "react"
import { NavLink } from "react-router-dom"
import {DataContext,AuthContext} from '..';

export function Header(){
    const {state} = useContext(DataContext);
    const {authState} = useContext(AuthContext);
    return (
        <div>
            <h1>E-commerce-app</h1>
        <nav className="nav-bar">
         <NavLink to="/" className="nav-link">Home </NavLink>
         <NavLink to="/products" className="nav-link">Products </NavLink>
         <NavLink to="/wishlist" className="nav-link">Wishlist ({state.wishlist.length})</NavLink>
         <NavLink to="/cart" className="nav-link">Cart ({state.cart.reduce((totalCart,product) => totalCart+product.qty,0)})</NavLink>
         <NavLink to={authState.isLoggedIn ? "/account-details" : "/login"} className="nav-link"> {authState.isLoggedIn ? 'Profile' : 'Login' }</NavLink>
        </nav>
        </div>
    )
}