import { useContext } from "react"
import { useNavigate } from "react-router-dom";

import { OrderContext } from "../../contexts/orderContext"
import './profile.css';

export function OrderHistory(){
    const navigate = useNavigate();
    const {orderHistory} = useContext(OrderContext)

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
                            orderHistory.map(({orderItems, orderAmount,deliveryAddress}) => <div>
                               <h3> orderItems : </h3>
                               <ul>
                                {
                                orderItems.map(product => <li>
                                    <p>{product.title} - {product.qty}</p></li>)
                                }
                               </ul>
                               <h3>OrderAmount: {orderAmount}</h3>
                               
                               <div key={deliveryAddress.id} className="each-address">
                                  Delivered To:
                                  <p>{deliveryAddress.houseNumber} {deliveryAddress.city} {deliveryAddress.state}</p>
                                  <p>Pincode: {deliveryAddress.pincode}, {deliveryAddress.country}</p>
                                  <p>Contact Number: {deliveryAddress.mobileNumber}</p>
                                </div>
                                <hr/>
                                </div>)
                        }   
                    </div>)
              }     
            </div>
          )
}