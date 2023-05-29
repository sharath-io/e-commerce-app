import { useContext } from "react"
import { NavLink } from "react-router-dom";
import { DataContext } from ".."

export function Wishlist(){
    const {state, dispatch} = useContext(DataContext);
    return (
        <div>
            <h1>Wishlist page</h1>
            <ul>
                {
                    state.wishlist.length===0 ? <p>Wishlist is empty</p>
                    : state.wishlist?.map((product) => {
                        const {_id,title,image,categoryName,price} = product;
                    return (<li className="product-item" key={_id}>
                        <h4>{title}</h4>
                        <img src={image} alt={title}/>
                        <p>{categoryName}</p>
                        <p>{price}</p>
                        {
                            state.cart.includes(product)
                            ? <NavLink to="/cart" className="nav-link"><button>Go to cart</button></NavLink>
                            : <button onClick={()=> dispatch({type:'ADD_TO_CART', payload: _id})}>Add to cart</button>
                        }
                        <button onClick={()=> dispatch({type:'REMOVE_FROM_WISHLIST', payload:_id})}>Remove from wishlist</button>
                    </li>)})
                }
            </ul>
        </div>
    )
}