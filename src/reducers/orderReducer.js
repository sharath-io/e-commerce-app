export const initialOrder = {
    addressDetails: {},
    orderHistory: [],
  };
  export const orderReducer = (state, action) => {
    switch (action.type) {
      case "SET_ORDER_HISTORY":
        return {
          ...state,
          orderHistory: [...state?.orderHistory, action.payload],
        };
      case "SET_ADDRESS_DETAILS":
        return {
          ...state,
          addressDetails: action.payload,
        };
      default:
        return state;
    }
  };