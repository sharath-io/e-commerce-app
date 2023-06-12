import { useContext, useState } from "react"

import { DataContext } from "../.."
import { AddressForm } from "../../utils/address-utils/addressForm";
import { EditAddress } from "../../utils/address-utils/editAddress";
import './profile.css';


export function AddressDetails(){
    const {state, productDispatch} = useContext(DataContext)
    const [isAddAddress, setIsAddAddress] = useState(false);
    
    return (
        <div>
            <h2 className="profile-active-heading">Address Details</h2>
            <div className="address-container">
              {state.address.length === 0 && 
              <div>
                <p> No Address created</p>
              </div>}
              {state.address.map(({id,houseNumber, city, state,country,pincode,mobileNumber,isEdit}) =>{
               return (
                <div key={id} className="individual-address">
                    <p>{houseNumber} {city} {state}</p>
                    <p>Pincode: {pincode}, {country}</p>
                    <p>Contact Number: {mobileNumber}</p>
                    
                    {isEdit && <EditAddress editAddressId={id}/>}
                    <button onClick={()=> productDispatch({type:'EDIT_ADDRESS', payload: id})} className="card-button edit-btn"><i className="fa-solid fa-pen-to-square"></i></button>
                    <button onClick={()=> productDispatch({type:'DELETE_USER_ADDRESS', payload: id })} className="card-button delete-btn"><i className="fa-solid fa-trash-can"></i></button>                 
                    <hr/>
                </div>
               )})}
            </div>
            <p onClick={()=>setIsAddAddress(true)} className="new-address">+ Add New Address</p>
                    {isAddAddress && <AddressForm setIsAddAddress ={setIsAddAddress}/>}
        </div>
    )
}