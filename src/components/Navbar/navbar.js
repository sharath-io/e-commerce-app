import { useContext } from "react"
import { NavLink, useLocation } from "react-router-dom"

import './navbar.css';
import {DataContext,AuthContext, FilterContext} from '../..';
import {getActiveNab} from './getActiveNab';

export function Navbar(){
    const localState = useLocation();

    const {state} = useContext(DataContext);
    const {authState} = useContext(AuthContext);
    const {dispatchFilter} = useContext(FilterContext);  

    return (
        <div>
            <p className="header">FREE SHIPPING AND RETURNS ON ALL META DEVICES!</p>

            <div className="nav-container">
              <NavLink to="/"  className="nav-link ecom-name">Meta-Store</NavLink>
              {localState.pathname==='/products' && <label>
                <input type="text" placeholder="Search products" className="search-filter"
                onChange={(e)=> dispatchFilter({type:'SEARCH_TEXT', payload: e.target.value})}/>
              </label>}

              <nav className="nav-bar">
               <NavLink to="/products" className="nav-link" style={getActiveNab}>Products </NavLink>
               <NavLink to="/wishlist" className="nav-link" style={getActiveNab}>{authState.isLoggedIn ?  `Wishlist (${state.wishlist.length})` : 'Wishlist'}</NavLink>
               <NavLink to="/cart" className="nav-link" style={getActiveNab}>{authState.isLoggedIn ?  `Cart (${state.cart.reduce((totalCart,product) => totalCart+product.qty,0)})` : 'Cart'}</NavLink>
               <NavLink to={authState.isLoggedIn ? "/account-details/userDetails" : "/login"} className="nav-link" style={getActiveNab}> {authState.isLoggedIn ? 'Profile' : 'Login' }</NavLink>
              </nav>
             </div> 
        </div>
    )
}