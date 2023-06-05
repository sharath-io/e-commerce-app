import { useContext } from "react"
import {NavLink} from 'react-router-dom';
import {DataContext, FilterContext } from ".."

export function Products(){
    const {state,dispatch} = useContext(DataContext);

    const {filtersState, dispatchFilter, sortFilteredData} = useContext(FilterContext);
    return (
        <div>
            <h1>Products page</h1>
            <button onClick={()=> dispatchFilter({type:'CLEAR_ALL_FILTERS'})}>Clear Filters</button>
            <label>
                <input type="text" placeholder="search product" 
                onChange={(e)=> dispatchFilter({type:'SEARCH_TEXT', payload: e.target.value})}/>
            </label>
            {
                state.categories.map(({categoryName}) =>
                    <label>
                        <input type="checkbox" onChange={()=> dispatchFilter({type:'FILTER_CATEGORY', payload: categoryName})}
                        checked={filtersState.categoryFilter.includes(categoryName)}/>
                        {categoryName}
                    </label>
                )
            }
            <label>
                <input type="radio" name="price" value="lth"
                onChange={(e)=> dispatchFilter({type:'SORT_BY_PRICE',payload: e.target.value})}
                checked={filtersState.sortType==='lth'}/>Sort by price: low to High
            </label>
            <label>
                <input type="radio" name="price" value="htl"
                onChange={(e)=> dispatchFilter({type:'SORT_BY_PRICE',payload:e.target.value})}
                checked={filtersState.sortType==='htl'}/>Sort by price: high to Low
            </label>
            <div className="price-range-filter">
                <div className="price-range">
                    <p>1000</p>
                    <p>3000</p>
                    <p>5000</p>
                </div>
                <label>
                  <input type="range" min={1000} max={5000}  value={filtersState.priceRange} onChange={(e)=> dispatchFilter({type:'PRICE_RANGE', payload:e.target.value})}/>
                </label>
            </div>
            
            <ul>
                {
                    sortFilteredData?.map((product) => {
                        const {_id,title,image,categoryName,price} = product;
                    return (<li className="product-item" key={_id}>
                        <h4>{title}</h4>
                        <img src={image} alt={title}/>
                        <p>{categoryName}</p>
                        <p>{price}</p>
                        <p><NavLink to={`/product/${_id}`}>View product Details</NavLink></p>
                        {
                            state.cart.includes(product)
                            ? <NavLink to="/cart" className="nav-link"><button>Go to Cart</button></NavLink>
                            : <button className="btn-primary" onClick={()=> dispatch({type:'ADD_TO_CART', payload: _id})}>Add to Cart</button>
                        }
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