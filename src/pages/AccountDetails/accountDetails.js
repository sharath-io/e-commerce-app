import { NavLink, Outlet } from "react-router-dom";

import { getActiveStyle } from "../../utils/getActiveStyle";
import './profile.css';

export function AccountDetails(){
    
    return (
        <div>
          <h1>Account</h1>
          <div  className="profile-page">   
            <div className="form-container">
              <div  className="profile-nav">
                <NavLink to="/account-details/userDetails" className="profile-heading" style={getActiveStyle }>User Details</NavLink>
                <NavLink to="/account-details/addressDetails"  className="profile-heading"  style={getActiveStyle }>Address Details</NavLink>
                <NavLink to="/account-details/orderDetails"  className="profile-heading"  style={getActiveStyle }>Order History</NavLink>
              </div>
              <div> <Outlet/></div>
            </div>  
           </div>
        </div>
    )
}