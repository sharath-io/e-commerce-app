import { useContext,useState } from "react";
import { DataContext } from "../../contexts/dataContext";
import './checkout.css';
import { useNavigate } from "react-router-dom";
import { OrderContext } from "../../contexts/orderContext";

export function CheckOut(){
    const navigate = useNavigate();
    const {state} = useContext(DataContext);
    const {orderDispatch} = useContext(OrderContext);
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
                 {state.address.map(({id, userName,houseNumber, city, state,country,pincode,mobileNumber}) =>{
                 return (
                  <div key={id}>
                    <p>userName: {userName}</p>
                    <p>{houseNumber} {city} {state}</p>
                    <p>Pincode: {pincode}, {country}</p>
                    <p>Contact Number: {mobileNumber}</p>
                    <button onClick={()=>navigate('/account-details/addressDetails')} className="card-button">Add New Address</button>
              </div>
                  )
                  } )}
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
                    