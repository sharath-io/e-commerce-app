import { useContext } from "react"
import {NavLink, useNavigate} from 'react-router-dom';
import {AuthContext, DataContext, FilterContext } from ".."
import {isItemInCart} from '../utils/cart-utils/isItemInCart';
import {addToCartHandler} from '../utils/cart-utils/addToCarthandler';
import {isItemInWishlist} from '../utils/wishlist-utils/isItemInWIshlist';
import {addToWishlistHandler} from '../utils/wishlist-utils/addToWishlisthandler';


export function Products(){
    const navigate = useNavigate();
    const {state,productDispatch} = useContext(DataContext);
    const {authState} = useContext(AuthContext)

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
                        <button onClick={()=>{
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
                        <button onClick={()=>{
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