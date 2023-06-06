import { useContext } from "react"
import {NavLink, useNavigate} from 'react-router-dom';
import {AuthContext, DataContext, FilterContext } from "../.."
import {isItemInCart} from '../../utils/cart-utils/isItemInCart';
import {addToCartHandler} from '../../utils/cart-utils/addToCarthandler';
import {isItemInWishlist} from '../../utils/wishlist-utils/isItemInWishlist';
import {addToWishlistHandler} from '../../utils/wishlist-utils/addToWishlisthandler';
import './products.css';

export function Products(){
    const navigate = useNavigate();
    const {state,productDispatch} = useContext(DataContext);
    const {authState} = useContext(AuthContext)

    const {filtersState, dispatchFilter, sortFilteredData} = useContext(FilterContext);
    return (
        <div>
            <h1>Meta Products - {sortFilteredData.length}</h1>
            <div className="productsListing-container">
             <div className="filter-container">


                <div className="clear-filter filter-item">
                  <button  className="card-button" onClick={()=> dispatchFilter({type:'CLEAR_ALL_FILTERS'})}>Clear Filters</button>
                </div>

                <div className="category-filter filter-item">
                     <h4>Category Filter</h4>
                    {
                         state.categories.map(({categoryName}) =>
                         <div>
                         <label>
                           <input type="checkbox" onChange={()=> dispatchFilter({type:'FILTER_CATEGORY', payload: categoryName})}
                           checked={filtersState.categoryFilter.includes(categoryName)}/>
                            {categoryName}
                         </label>
                         </div>
                          )
                    }
                </div>


                <div className="sort-filter filter-item">
                    <h4>Sort Filter</h4>
                    <div>
                   <label>
                   <input type="radio" name="price" value="lth"
                      onChange={(e)=> dispatchFilter({type:'SORT_BY_PRICE',payload: e.target.value})}
                      checked={filtersState.sortType==='lth'}/>Sort by price: low to High
                    </label>
                    </div>
                    <div>
                    <label>
                     <input type="radio" name="price" value="htl"
                        onChange={(e)=> dispatchFilter({type:'SORT_BY_PRICE',payload:e.target.value})}
                        checked={filtersState.sortType==='htl'}/>Sort by price: high to Low
                     </label>
                     </div>

                </div>
            
            <div className="price-range-filter filter-item">
            <h4>Rating Filter</h4>
                <div className="price-range">
                    <p>1000</p>
                    <p>3000</p>
                    <p>5000</p>
                </div>
                <label>
                  <input type="range" min={1000} max={5000}  value={filtersState.priceRange} onChange={(e)=> dispatchFilter({type:'PRICE_RANGE', payload:e.target.value})}/>
                </label>
            </div>

            </div>
            
            
            <ul className="card-container">
                {
                    sortFilteredData?.map((product) => {
                        const {_id,title,image,categoryName,originalPrice,sellingPrice} = product;
                    return (<li className="product-item card-item" key={_id}>
                        <h4>{title}</h4>
                        <img src={image} alt={title} className="product-img"/>
                        <p>{categoryName}</p>
                        <p style={{textDecoration:'line-through'}}>{originalPrice}</p>
                        <p>{sellingPrice}</p>
                        <p><NavLink to={`/product/${_id}`}>View product Details</NavLink></p>
                        
                        <button  className="card-button" onClick={()=>{
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
                        <button className="card-button btn-primary" onClick={()=>{
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
            
    </div>
    )
}