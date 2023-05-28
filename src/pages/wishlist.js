import { useContext } from "react"
import { DataContext } from ".."

export function Wishlist(){
    const {state, dispatch} = useContext(DataContext);
    return (
        <div>
            <h1>Wishlist page</h1>
            <ul>
                {
                    state.wishlist.length===0 ? <p>Wishlist is empty</p>
                    : state.wishlist?.map((product) => <li className="product-item" key={product._id}>
                        <h4>{product.title}</h4>
                        <img src={product.image} alt={product.title}/>
                        <p>{product.categoryName}</p>
                        <p>{product.price}</p>
                        <button className="btn-primary" onClick={()=> dispatch({type:'ADD_TO_CART', payload: product._id})}>Add to Cart</button>
                        <button onClick={()=> dispatch({type:'REMOVE_FROM_WISHLIST', payload:product._id})}>Remove from wishlist</button>
                    </li>)
                }
            </ul>
        </div>
    )
}