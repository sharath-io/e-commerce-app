import { useContext } from "react"
import { useNavigate } from "react-router-dom";

import { OrderContext,AuthContext } from "../.."
import './profile.css';

export function OrderHistory(){
    const navigate = useNavigate();
    const {orderHistory} = useContext(OrderContext);
    const {authState} = useContext(AuthContext);

    const userOrderHistory =
      orderHistory &&
      authState.user &&
      orderHistory?.filter(({userEmail}) => userEmail === authState?.user?.email);

    return (
            <div>
              <h2  className="profile-active-heading">Your Orders - {userOrderHistory.length}</h2>
              {
                userOrderHistory.length === 0  
                ? (<div>
                        <p>Your haven't ordered </p> 
                         <button onClick={()=> navigate('/products')} className="card-button">Shop Now </button>
                   </div>) 
                :  (<div className="order-history-container">
                        {
                            userOrderHistory.map(({orderItems, orderAmount,deliveryAddress}) => <div>
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