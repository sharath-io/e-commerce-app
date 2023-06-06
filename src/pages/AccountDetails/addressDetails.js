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
              {state.address.length === 0 && <p> No Address created</p>}
              {state.address.map(({id, userName,houseNumber, city, state,country,pincode,mobileNumber,isEdit}) =>{
               return (
                <div key={id}>
                    <p>userName: {userName}</p>
                    <p>{houseNumber} {city} {state}</p>
                    <p>Pincode: {pincode}, {country}</p>
                    <p>Contact Number: {mobileNumber}</p>
                    {isEdit && <EditAddress editAddressId={id}/>}
                    <button onClick={()=> productDispatch({type:'EDIT_ADDRESS', payload: id})}>Edit</button>
                    <button onClick={()=> productDispatch({type:'DELETE_USER_ADDRESS', payload: id })}>DELETE</button>
                    <button onClick={()=>setIsAddAddress(true)}>Add New Address</button>
                    {isAddAddress && <AddressForm setIsAddAddress ={setIsAddAddress}/>}
                </div>
               )
              } )}
            </div>
        </div>
    )
}