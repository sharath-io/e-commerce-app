import axios from "axios";

export const addToWishlistHandler = async (product, productDispatch) => {
  try {
    const encodedToken = localStorage.getItem("token");
    const { status, data } = await axios.post(
      `/api/user/wishlist`,
      { product },
      {
        headers: {
          authorization: encodedToken,
        },
      }
    );
    if (status === 201) {
        productDispatch({
        type: "SET_WISHLIST",
        payload: data?.wishlist,
      });
    }
  } catch (error) {
    console.error(error);
  }
};