import { NavLink } from "react-router-dom";
import { useContext } from "react"
import { DataContext } from ".."

export function Cart(){
    const {state, dispatch} = useContext(DataContext);
    const displayCart = state.cart.filter((value,index,self) =>self.indexOf(value)===index)
    return (
        <div>
            <h1>Cart page</h1>
            <ul>
                {
                    state.cart.length===0 ? <p>Cart is empty</p>
                    : displayCart?.map((product) =>{
                        const {_id,title,image,categoryName,price} = product;
                        
                    return (<li className="product-item" key={_id}>
                        <h4>{title}</h4>
                        <img src={image} alt={title}/>
                        <p>{categoryName}</p>
                        <p>{price}</p>
                        <div className="cart-quantity">
                          <button className="btn-primary" onClick={()=> dispatch({type:'ADD_TO_CART', payload: _id})}>+</button>
                          <p>{(state.cart.filter(item => item===product)).length}</p>
                          <button className="btn-primary">-</button>
                        </div>
                            <button onClick={()=> dispatch({type:'REMOVE_FROM_CART', payload: _id})}>Remove from Cart</button>
                        {
                            state.wishlist.includes(product)
                            ? <NavLink to="/wishlist" className="nav-link"><button>Go to wishlist</button></NavLink>
                            : <button onClick={()=> dispatch({type:'ADD_TO_Wishlist', payload: _id})}>Add to wishlist</button>
                        }
                    </li>)})
                }
            </ul>
        </div>
    )
}