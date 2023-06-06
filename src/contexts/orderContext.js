import { createContext, useReducer,useState } from "react"
import { orderReducer, initialOrder } from "../reducers/orderReducer";

export const  OrderContext = createContext();

export function OrderProvider({children}){
    
    const [orderState,orderDispatch] = useReducer(orderReducer, initialOrder);
    const [couponvalue, setCouponValue] = useState({couponName:'', value: 0})


    return (
        <OrderContext.Provider value={{orderHistory:orderState?.orderHistory, addressDetails: orderState?.addressDetails, priceDetails: orderState?.priceDetails,orderDispatch,couponvalue,setCouponValue}}>
            {children}
        </OrderContext.Provider>
    )
}




