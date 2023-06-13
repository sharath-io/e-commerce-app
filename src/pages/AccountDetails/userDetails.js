import { useContext } from "react"

import { AuthContext } from "../.."
import './profile.css';

export function UserDetails(){
    const {authState, userLogout} = useContext(AuthContext);
   
    return (
            <div>
              <h2 className="profile-active-heading">User Details</h2>
              <p>First Name: {authState.user.firstName}</p>
              <p>Last Name: {authState.user.lastName} </p>
              <button onClick={userLogout} className="btn-primary card-button">Logout</button>
            </div>
    )
}