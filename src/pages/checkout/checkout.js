import { useContext,useState } from "react";
import { DataContext } from "../../contexts/dataContext";
import './checkout.css';
import { useNavigate } from "react-router-dom";
import { OrderContext } from "../../contexts/orderContext";

export function CheckOut(){
    const navigate = useNavigate();
    const {state} = useContext(DataContext);
    const {addressDetails,orderDispatch} = useContext(OrderContext);
    const [displayCheckout, setDisplayCheckout] = useState(false);

    const totalCartPrice = state.cart.reduce((acc,curr) => acc+Number(curr.sellingPrice)*curr.qty,0);
    const totalCartItems = state.cart.reduce((totalCart,product) => totalCart+product.qty,0);

    const orderData = {
        orderItems: [...state.cart],
        orderAmount: totalCartPrice
    }

    return (
        <div>
            <h1>CheckOut page</h1>
            {
              displayCheckout 
              ? (<div> 
                     <h1>Your order is confirmed :</h1>
                     <p>Can check in <button onClick={()=> navigate('/account-details/orderDetails')} className="card-button">Order History</button></p>
                  </div>) 
              : <div className="checkout-container">
              <div className="checkout-address">
                <h3>Address Details</h3>
                 {state.address.length === 0 && <p> No Address created <button onClick={()=>navigate('/account-details/addressDetails')} className="card-button">Add Address</button></p>}
                 {state.address.map((address) =>{
                  const {id, userName,houseNumber, city, state,country,pincode,mobileNumber} = address
                 return (
                  <div key={id} className="each-address">
                    <label><input type="radio" name="selected-address"
                    onChange={()=> orderDispatch({type: 'SET_ADDRESS_DETAILS',payload:address})}/>userName: {userName}
                    </label>
                    
                    <p>{houseNumber} {city} {state}</p>
                    <p>Pincode: {pincode}, {country}</p>
                    <p>Contact Number: {mobileNumber}</p>
                  </div>
                  )
                  } )}
                  <button onClick={()=>navigate('/account-details/addressDetails')} className="card-button">Add New Address</button>
            </div>

                <div className="checkout-details"  style={{textAlign:"left"}}>
                    <h1>Order Details</h1>
                    <p>Total Products: {totalCartItems}</p>
                    <p>Total Price : {totalCartPrice}</p>
                    <br/>
                    <ul>
                      {
                        state.cart.map((product) => <li>
                            <p>{product.title} *  ({product.qty})</p> 
                        </li>)
                      } 
                    </ul>
                    {
                      addressDetails && <div key={addressDetails.id} className="each-address">  
                      <p>{addressDetails.houseNumber} {addressDetails.city} {addressDetails.state}</p>
                      <p>Pincode: {addressDetails.pincode}, {addressDetails.country}</p>
                      <p>Contact Number: {addressDetails.mobileNumber}</p>
                    </div>
                    }

                    
                    <button className="card-button btn-primary" onClick={()=> {
                        orderDispatch({type:'SET_ORDER_HISTORY', payload:orderData})
                        setDisplayCheckout(true);
                    }}
                    

                    >Confirm Order</button>
                </div>
                </div>
                }
                </div>
                )
                }
                    