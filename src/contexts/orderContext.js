import { createContext, useReducer } from "react"

import { orderReducer, initialOrder } from "../reducers/orderReducer";

export const  OrderContext = createContext();

export function OrderProvider({children}){
    
    const [orderState,orderDispatch] = useReducer(orderReducer, initialOrder);

    return (
        <OrderContext.Provider value={{orderHistory:orderState?.orderHistory, addressDetails: orderState?.addressDetails,orderDispatch}}>
            {children}
        </OrderContext.Provider>
    )
}




