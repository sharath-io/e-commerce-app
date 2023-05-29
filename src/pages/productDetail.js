import { useContext } from "react";
import { NavLink, useParams } from "react-router-dom"
import {DataContext} from '..';

export function ProductDetail(){
    const {state, dispatch} = useContext(DataContext);
    const {productId} = useParams();
    const selectedProduct = state.products.find(product=> product._id===productId);
    const {_id,title,image,categoryName,price} = selectedProduct;
    return (
        <div>
            <h1>This is product Details page</h1>
            <div className="product-item" key={_id}>
                        <h4>{title}</h4>
                        <img src={image} alt={title}/>
                        <p>{categoryName}</p>
                        <p>{price}</p>
                        
                        {
                            state.cart.includes(selectedProduct)
                            ? <NavLink to="/cart" className="nav-link"><button>Go to Cart</button></NavLink>
                            : <button className="btn-primary" onClick={()=> dispatch({type:'ADD_TO_CART', payload: _id})}>Add to Cart</button>
                        }
                        {
                            state.wishlist.includes(selectedProduct)
                            ? <NavLink to="/wishlist" className="nav-link"><button>Go to wishlist</button></NavLink>
                            : <button onClick={()=> dispatch({type:'ADD_TO_Wishlist', payload: _id})}>Add to wishlist</button>
                        }
            </div>
        </div>
    )
}