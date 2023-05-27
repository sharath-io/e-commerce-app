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
                    : state.cart?.map((product) => <li className="product-item" key={product._id}>
                        <h4>{product.title}</h4>
                        <img src={product.image} alt={product.title}/>
                        <p>{product.categoryName}</p>
                        <p>{product.price}</p>
                        <button className="btn-primary">Add to Cart</button>
                        <button onClick={()=> dispatch({type:'REMOVE_FROM_CART', payload: product._id})}>Remove from Cart</button>
                    </li>)
                }
            </ul>
        </div>
    )
}