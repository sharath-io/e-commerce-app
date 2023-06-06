import {useContext} from 'react';
import { NavLink } from 'react-router-dom';
import { DataContext, FilterContext } from "../.."
import { Banner } from '../../assets';
import './home.css';

export function Home(){
    const {state} = useContext(DataContext);
    const {dispatchFilter} = useContext(FilterContext);
    return (
         <div className="main-content">
             <div>
                 <img className="banner-img fit" src={Banner} alt="meta-device"/>
             </div>
             <div className="text-overlap">
                 <div className="meta-info">
                    <p>Get your physical devices for virtual world</p>
                    <div>
                        <NavLink to="/products">
                           <button className="explore-products">Meta devices {" "} {" "} {" "}&gt;</button>
                        </NavLink>
                    </div>
                 </div>
            </div>
            <ul className="homecatgeory-container">
                {state.categories.length > 0 && 
                    state.categories.map(( category) =>{
                    const {_id,categoryName,description,image} = category
                    return ( <li key={_id} className='card-item'>
                        <h3>{categoryName}</h3>
                        <img src={image} alt={categoryName} className="product-img"/>
                        <p>{description}</p>
                        <button className="card-button" onClick={()=> {
                            dispatchFilter({type:'CLEAR_ALL_FILTERS'})
                            dispatchFilter({type:'FILTER_CATEGORY', payload: categoryName})
                           }}>
                            <NavLink to="/products">Explore Now</NavLink>
                        </button>
                    </li>)})
                }
            </ul>
         </div>
    )}