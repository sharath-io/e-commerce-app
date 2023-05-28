import { useContext } from "react"
import { NavLink } from "react-router-dom"
import {DataContext} from '..';

export function Header(){
    const {state} = useContext(DataContext);
    return (
        <div>
            <h1>E-commerce-app</h1>
        <nav>
         <NavLink to="/" className="nav-link">Home </NavLink>
         <NavLink to="/products" className="nav-link">Products </NavLink>
         <NavLink to="/wishlist" className="nav-link">Wishlist ({state.wishlist.length})</NavLink>
         <NavLink to="/cart" className="nav-link">Cart ({state.cart.length})</NavLink>
        </nav>
        </div>
    )
}