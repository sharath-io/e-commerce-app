import { NavLink } from "react-router-dom";
import { useContext } from "react"
import { DataContext } from ".."

export function Cart(){
    const {state, dispatch} = useContext(DataContext);
    return (
        <div>
            <h1>Cart page</h1>
            <ul>
                {
                    state.cart.length===0 ? <p>Cart is empty</p>
                    : state.cart?.map((product) =><li className="product-item" key={product._id}>
                        <h4>{product.title}</h4>
                        <img src={product.image} alt={product.title}/>
                        <p>{product.categoryName}</p>
                        <p>{product.price}</p>
                        <div className="cart-quantity">
                          <button className="btn-primary" onClick={()=> dispatch({type:'ADD_TO_CART', payload: product._id})}>+</button>
                          <p>{(state.cart.filter(item => item===product)).length}</p>
                          <button className="btn-primary">-</button>
                        </div>
                            <button onClick={()=> dispatch({type:'REMOVE_FROM_CART', payload: product._id})}>Remove from Cart</button>
                        {
                            state.wishlist.includes(product)
                            ? <NavLink to="/wishlist" className="nav-link"><button>Go to wishlist</button></NavLink>
                            : <button onClick={()=> dispatch({type:'ADD_TO_Wishlist', payload: product._id})}>Add to wishlist</button>
                        }
                    </li>)
                }
            </ul>
        </div>
    )
}