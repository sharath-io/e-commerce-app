import {useContext} from 'react';
import { NavLink } from 'react-router-dom';
import { DataContext, FilterContext } from ".."

export function Home(){
    const {state} = useContext(DataContext);
    const {dispatchFilter} = useContext(FilterContext);
    return (
        <div>
            <h1>Home page</h1>
            <ul>
                {state.categories.length > 0 && 
                    state.categories.map(( category) =>{
                    const {_id,categoryName,description,image} = category
                    return ( <li key={_id}>
                        <h3>{categoryName}</h3>
                        <img src={image} alt={categoryName}/>
                        <p>{description}</p>
                        <NavLink to="/products">
                           <button className="btn-explore" onClick={()=> {
                            dispatchFilter({type:'CLEAR_ALL_FILTERS'})
                            dispatchFilter({type:'FILTER_CATEGORY', payload: categoryName})
                           }}>
                            Explore Now</button>
                        </NavLink>
                    </li>)})
                }
            </ul>

        </div>
    )
}