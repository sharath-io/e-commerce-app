import { useContext, useState } from "react";
import { DataContext } from "../..";

export function EditAddress(editAddressId){
    const {state, productDispatch}  = useContext(DataContext);
    
    const [editAddress, setEditAddress] = useState({
        id: editAddressId,
        userName: state?.address?.find(({id})=> id=== editAddressId)?.userName,
        houseNumber:state?.address?.find(({id})=> id=== editAddressId)?.houseNumber, 
        city:state?.address?.find(({id})=> id=== editAddressId)?.city, 
        state:state?.address?.find(({id})=> id=== editAddressId)?.state,
        country:state?.address?.find(({id})=> id=== editAddressId)?.country,
        pincode:state?.address?.find(({id})=> id=== editAddressId)?.pincode,
        mobileNumber:state?.address?.find(({id})=> id=== editAddressId)?.mobileNumber,
    });


    return (
        <div>
            <h4>Edit Address</h4>
            <form>
                <input type="text" name ="userName" placeholder="Enter Name" value={editAddress.userName} onChange={(e)=>setEditAddress((editAddress) => ({...editAddress, [e.target.name]: e.target.value}))} required/>
                <input type="text" name ="houseNumber" placeholder="Enter houseNumber" value={editAddress.houseNumber} onChange={(e)=>setEditAddress((editAddress) => ({...editAddress, [e.target.name]: e.target.value}))} required/>
                <input type="text" name ="city" placeholder="Enter City" value={editAddress.city} onChange={(e)=>setEditAddress((editAddress) => ({...editAddress, [e.target.name]: e.target.value}))} required/>
                <input type="text" name ="state" placeholder="Enter State" value={editAddress.state} onChange={(e)=>setEditAddress((editAddress) => ({...editAddress, [e.target.name]: e.target.value}))} required/>
                <input type="text" name ="country" placeholder="Enter Country" value={editAddress.country} onChange={(e)=>setEditAddress((editAddress) => ({...editAddress, [e.target.name]: e.target.value}))} required/>
                <input type="number" name ="pincode" placeholder="Enter Pincode" value={editAddress.pincode} onChange={(e)=>setEditAddress((editAddress) => ({...editAddress, [e.target.name]: e.target.value}))} required/>
                <input type="number" name ="mobileNumber" placeholder="Enter Number" value={editAddress.mobileNumber} onChange={(e)=>setEditAddress((editAddress) => ({...editAddress, [e.target.name]: e.target.value}))} required/>
                <button onClick={()=> productDispatch({type:'SAVE_EDITED_ADDRESS', payload:[editAddress, editAddressId]})}>Edit</button>
                <button onClick={()=> productDispatch({type:'CANCEL_EDITED_ADDRESS', payload:editAddressId})}>Cancel</button>
            </form>

        </div>
    )
}