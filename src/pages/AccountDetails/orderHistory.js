import { useContext } from "react"
import { OrderContext } from "../../contexts/orderContext"
import { useNavigate } from "react-router-dom";

export function OrderHistory(){
    const navigate = useNavigate();
    const {orderHistory} = useContext(OrderContext);
    return (
        <div>
            <h1>Order History</h1>
            {
                orderHistory.length === 0  && (
                    <div>
                        <p>Your haven't ordered </p>
                         <button onClick={()=> navigate('/products')}>Shop Now </button>
                    </div>

                )
            }
        </div>
    )
}



// addressDetails: {},
//         priceDetails: {
//             price: 0,
//             discount: 0,
//             coupon:0,
//             totalAmt:0,
//             totalDiscount: 0,
//         },
//         orderHistory: [],