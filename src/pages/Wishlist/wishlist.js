import { useContext } from "react"
import { useNavigate } from "react-router-dom";
import { AuthContext, DataContext } from "../.."
import {isItemInCart} from '../../utils/cart-utils/isItemInCart';
import {addToCartHandler} from '../../utils/cart-utils/addToCarthandler';
import { removeFromWishlistHandler } from "../../utils/wishlist-utils/removeFromWishlistHandler";
import './wishlist.css';

export function Wishlist(){
    const navigate = useNavigate();
    const {state, productDispatch} = useContext(DataContext);
    const {authState} = useContext(AuthContext);
    return (
        <div>
            <h1>Wishlist page</h1>
            <ul  className="wishlist-container">
                {
                    state.wishlist.length===0 ? <p>Wishlist is empty</p>
                    : state.wishlist?.map((product) => {
                        const {_id,title,image,categoryName,price} = product;
                    return (<li key={_id} className="product-item card-item">
                        <h4>{title}</h4>
                        <img src={image} alt={title} className="product-img"/>
                        <p>{categoryName}</p>
                        <p>{price}</p>
                        <button className="card-button" onClick={()=> removeFromWishlistHandler(productDispatch, _id)}>Remove from Wishlist</button>
                        <button className="card-button btn-primary"
                          onClick={()=>{
                            if(authState.isLoggedIn){
                                if(isItemInCart(state.cart, _id)){
                                    navigate('/cart');
                                } else{
                                    addToCartHandler(product, productDispatch)
                                }
                            }
                            else{
                                navigate('/login');
                            }
                        }}>
                            {isItemInCart(state?.cart, _id) ? "Go to Cart" : "Add to Cart"}
                        </button>
                      </li>)})
                }
            </ul>
        </div>
    )
}