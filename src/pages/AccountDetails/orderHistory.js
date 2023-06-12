import { useContext } from "react"
import { useNavigate } from "react-router-dom";

import { OrderContext } from "../../contexts/orderContext"
import './profile.css';

export function OrderHistory(){
    const navigate = useNavigate();
    const {orderHistory, addressDetails} = useContext(OrderContext);
    const {id,houseNumber,city,state,pincode,country,mobileNumber} = addressDetails;

    return (
            <div>
             <h2  className="profile-active-heading">Your Orders - {orderHistory.length}</h2>
             {
                orderHistory.length === 0  
                ? (<div>
                        <p>Your haven't ordered </p> 
                         <button onClick={()=> navigate('/products')} className="card-button">Shop Now </button>
                   </div>) 
                :  (<div className="order-history-container">
                        {
                            orderHistory.map(({orderItems, orderAmount}) => <div>
                               <h3> orderItems : </h3>
                               <ul>
                                {
                                orderItems.map(product => <li>
                                    <p>{product.title} - {product.qty}</p></li>)
                                }
                               </ul>
                               <h3>OrderAmount: {orderAmount}</h3>
                                </div>)
                        }
                        <div key={id} className="each-address">
                            Delivered To:
                            <p>{houseNumber} {city} {state}</p>
                            <p>Pincode: {pincode}, {country}</p>
                            <p>Contact Number: {mobileNumber}</p>
                        </div>
                    </div>)
             }     
            </div>
          )
}