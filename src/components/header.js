import { NavLink } from "react-router-dom"

export function Header(){
    return (
        <div>
            <h1>E-commerce-app</h1>
        <nav>
         <NavLink to="/" className="nav-link">Home </NavLink>
         <NavLink to="/products" className="nav-link">Products </NavLink>
         <NavLink to="/wishlist" className="nav-link">Wishlist </NavLink>
         <NavLink to="/cart" className="nav-link">Cart </NavLink>
        </nav>
        </div>
    )
}