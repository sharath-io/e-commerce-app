export const productReducer = (state, action) => {
    switch (action.type) {
        case 'INITIALIZE_CATEGORIES': return { ...state, categories: action.payload };
        case 'INITIALIZE_PRODUCTS': return { ...state, products: action.payload };
        case 'SET_CART': return { ...state, cart: action.payload };
        case 'SET_WISHLIST': return { ...state, wishlist: action.payload };
        case 'SET_USER_ADDRESS': return {...state, address: [...state.address, action.payload]};
        case 'DELETE_USER_ADDRESS': return {...state, address: state.address.filter(({id})=> id!==action.payload)} 
        case 'EDIT_ADDRESS': return {...state, address: 
            state.address.map((addressData) => addressData.id === action.payload 
            ? {...addressData, isEdit: true}
            : addressData
            )};
        case 'SAVE_EDITED_ADDRESS': return {...state,address: 
            state.address.map((addressData) => addressData.id===action.payload[1]
            ? {...action.payload[0]}
            : addressData
            )};
        case 'CANCEL_EDITED_ADDRESS': return {...state, address:
           state.address.map((addressData) => addressData.id===action.payload
           ? {...addressData, isEdit: false}
           : addressData
           )}
        default: return state;
    }
};