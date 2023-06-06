import { useNavigate } from "react-router-dom";
import { useContext } from "react"
import { AuthContext, DataContext } from ".."
import {isItemInWishlist} from '../utils/wishlist-utils/isItemInWishlist';
import {addToWishlistHandler} from '../utils/wishlist-utils/addToWishlisthandler';
import { removeFromCartHandler } from "../utils/cart-utils/removeFromCartHandler";
import {handleCartQuantityChange} from '../utils/cart-utils/handleCartQuantityChange';

export function Cart(){
    const navigate = useNavigate();
    const {state, productDispatch} = useContext(DataContext);
    const {authState} = useContext(AuthContext);
    return (
        <div>
            <h1>Cart page</h1>
            <ul>
                {
                    state.cart.length===0 ? <p>Cart is empty</p>
                    : state.cart?.map((product) =>{
                        const {_id,title,image,categoryName,sellingPrice} = product;
                        
                    return (<li className="product-item" key={_id}>
                        <h4>{title}</h4>
                        <img src={image} alt={title} className="product-img"/>
                        <p>{categoryName}</p>
                        <p>{sellingPrice}</p>
                        <div className="cart-quantity">
                        <button   className="card-button"
                           disabled={product.qty > 1 ? false : true}
                           onClick={() => {handleCartQuantityChange(productDispatch, _id, "decrement")}}
                         >-</button>
                        <p>{product.qty}</p>
                        <button  className="card-button"
                           onClick={() => {handleCartQuantityChange(productDispatch, _id, "increment")}}
                         >+</button>

                        </div>
                        <button  className="card-button" onClick={()=> removeFromCartHandler(productDispatch, _id)}>Remove from Cart</button>
                        <button  className="card-button" onClick={()=>{
                            if(authState.isLoggedIn){
                                if(isItemInWishlist(state.wishlist, _id)){
                                    navigate('/wishlist');
                                } else{
                                    addToWishlistHandler(product, productDispatch)
                                }
                            }
                            else{
                                navigate('/login');
                            }
                        }}>
                            {isItemInWishlist(state?.wishlist, _id) ? "Go to Wishlist" : "Add to Wishlist"}
                        </button>
                    </li>)})
                }
            </ul>
        </div>
    )
}