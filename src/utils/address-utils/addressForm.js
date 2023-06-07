import { useContext, useState } from "react";
import { v4 as uuid } from "uuid";
import { DataContext } from "../..";


export function AddressForm({setIsAddAddress}) {
    const {productDispatch} = useContext(DataContext);
    const [addressForm, setAddressForm] = useState({
        id:uuid(),
        userName:'',
        houseNumber:'',
        city:'', 
        state:'',
        country:'',
        pincode:'',
        mobileNumber:'',
    });
    const handleFormInputChange =(e)=> setAddressForm((addressForm)=> ({...addressForm, [e.target.name]: e.target.value}))

    const addressFormHandler = (e) =>{
        e.preventDefault();
        productDispatch({type:'SET_USER_ADDRESS', payload: addressForm})
        setIsAddAddress(false);
    }
    
    return(
         <div>
            <h4>Add Address</h4>
            <form onSubmit={addressFormHandler}>
                <input type="text" name ="userName" placeholder="Enter Name" value={addressForm.userName} onChange={(e)=>handleFormInputChange(e)} required/>
                <input type="text" name ="houseNumber" placeholder="Enter houseNumber" value={addressForm.houseNumber} onChange={(e) => handleFormInputChange(e)} required/>
                <input type="text" name ="city" placeholder="Enter City" value={addressForm.city} onChange={(e) => handleFormInputChange(e)} required/>
                <input type="text" name ="state" placeholder="Enter State" value={addressForm.state} onChange={(e) => handleFormInputChange(e)} required/>
                <input type="text" name ="country" placeholder="Enter Country" value={addressForm.country} onChange={(e) => handleFormInputChange(e)} required/>
                <input type="number" name ="pincode" placeholder="Enter Pincode" value={addressForm.pincode} onChange={(e) => handleFormInputChange(e)} required/>
                <input type="number" name ="mobileNumber" placeholder="Enter Number" value={addressForm.mobileNumber} onChange={(e) => handleFormInputChange(e)} required/>
                <button type="submit" className="card-button">Add Address</button>
                <button onClick={()=> setIsAddAddress(false)} className="card-button">Cancel</button>
            </form>
        </div>
    )
}