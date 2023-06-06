import { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom"
import {AuthContext, DataContext} from '..';
import {isItemInCart} from '../utils/cart-utils/isItemInCart';
import {addToCartHandler} from '../utils/cart-utils/addToCarthandler';
import {addToWishlistHandler} from '../utils/wishlist-utils/addToWishlisthandler';
import {isItemInWishlist} from '../utils/wishlist-utils/isItemInWishlist';

export function ProductDetail(){
    const navigate = useNavigate();
    const {state, productDispatch} = useContext(DataContext);
    const {authState} = useContext(AuthContext)
    const {productId} = useParams();
    const selectedProduct = state.products.find(product=> product._id===productId);
    const {_id,title,image,categoryName,sellingPrice} = selectedProduct;
    return (
        <div>
            <h1>This is product Details page</h1>
            <div className="product-item" key={_id}>
                        <h4>{title}</h4>
                        <img src={image} alt={title}/>
                        <p>{categoryName}</p>
                        <p>{sellingPrice}</p>
                        
                        <button onClick={()=>{
                            if(authState.isLoggedIn){
                                if(isItemInCart(state.cart, _id)){
                                    navigate('/cart');
                                } else{
                                    addToCartHandler(selectedProduct, productDispatch)
                                }
                            }
                            else{
                                navigate('/login');
                            }
                        }}>
                            {isItemInCart(state?.cart, _id) ? "Go to Cart" : "Add to Cart"}
                        </button>
                        <button onClick={()=>{
                            if(authState.isLoggedIn){
                                if(isItemInWishlist(state.wishlist, _id)){
                                    navigate('/wishlist');
                                } else{
                                    addToWishlistHandler(selectedProduct, productDispatch)
                                }
                            }
                            else{
                                navigate('/login');
                            }
                        }}>
                            {isItemInWishlist(state?.wishlist, _id) ? "Go to Wishlist" : "Add to Wishlist"}
                        </button>
            </div>
        </div>
    )
}