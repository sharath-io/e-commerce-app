import { useContext } from "react"
import { AuthContext } from "../.."

export function UserDetails(){
    const {authState} = useContext(AuthContext);
   
    return (
        <div>
            <h1>User Details</h1>
            <p>First Name: {authState.user.firstName}</p>
            <p>Last Name: {authState.user.lastName} </p>
        </div>
    )
}