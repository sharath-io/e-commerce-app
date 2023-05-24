import { useContext } from "react"
import { DataContext } from ".."

export function Products(){
    const {state} = useContext(DataContext);
    return (
        <div>
            <h1>Products page</h1>

            <ul>
                {
                    state.products.map(({categoryName,title,price,image}) => <li className="product-item">
                        <h4>{title}</h4>
                        <img src={image} alt={title}/>
                        <p>{categoryName}</p>
                        <p>{price}</p>
                        <button className="btn-primary">Add to Cart</button>
                        <button>Add to wishlist</button>
                    </li>)
                }
            </ul>
        </div>
    )
}