import { useContext, useState } from "react"
import { DataContext } from "../.."
import { AddressForm } from "../../utils/address-utils/addressForm";
import { EditAddress } from "../../utils/address-utils/editAddress";

export function AddressDetails(){
    const {state, productDispatch} = useContext(DataContext)
    const [isAddAddress, setIsAddAddress] = useState(false);
    
    return (
        <div>
            <h1>address Details</h1>
            <div>
              {state.address.length === 0 && 
              <div>
                <p> No Address created <button onClick={()=>setIsAddAddress(true)} className="card-button">Add Address</button></p>
                {isAddAddress && <AddressForm setIsAddAddress ={setIsAddAddress}/>}
            </div>}
              {state.address.map(({id, userName,houseNumber, city, state,country,pincode,mobileNumber,isEdit}) =>{
               return (
                <div key={id}>
                    <p>userName: {userName}</p>
                    <p>{houseNumber} {city} {state}</p>
                    <p>Pincode: {pincode}, {country}</p>
                    <p>Contact Number: {mobileNumber}</p>
                    {isEdit && <EditAddress editAddressId={id}/>}
                    <button onClick={()=> productDispatch({type:'EDIT_ADDRESS', payload: id})} className="card-button">Edit</button>
                    <button onClick={()=> productDispatch({type:'DELETE_USER_ADDRESS', payload: id })} className="card-button">DELETE</button>
                    <button onClick={()=>setIsAddAddress(true)} className="card-button">Add New Address</button>
                    {isAddAddress && <AddressForm setIsAddAddress ={setIsAddAddress}/>}
                </div>
               )
              } )}
            </div>
        </div>
    )
}