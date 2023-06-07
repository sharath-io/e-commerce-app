import { useContext } from "react"
import { NavLink, useLocation } from "react-router-dom"

import './navbar.css';
import {DataContext,AuthContext, FilterContext} from '../..';

export function Navbar(){
    const {state} = useContext(DataContext);
    const {authState} = useContext(AuthContext);
    const {dispatchFilter} = useContext(FilterContext);
    const localState = useLocation();
    return (
        <div>
            <p className="header">FREE SHIPPING AND RETURNS ON ALL META DEVICES!</p>
            <div className="nav-container">
              <NavLink to="/"  className="nav-link">Meta-Store</NavLink>
              {localState.pathname==='/products' && <label>
                <input type="text" placeholder="search product" 
                onChange={(e)=> dispatchFilter({type:'SEARCH_TEXT', payload: e.target.value})}/>
              </label>}
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