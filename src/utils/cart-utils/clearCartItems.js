import { removeFromCartHandler } from "./removeFromCartHandler";
const clearCartItems = (productDispatch, dataState) => {
  for (const item of dataState?.cart) {
    removeFromCartHandler(productDispatch, item?._id);
  }
};

export default clearCartItems;