import { removeFromCartHandler } from "./removeFromCartHandler";

export const clearCartItems = (state,productDispatch) => {
  for (const item of state?.cart) {
    removeFromCartHandler(productDispatch, item?._id);
  }
};