import {useContext} from 'react';
import { DataContext } from ".."

export function Home(){
    const {state} = useContext(DataContext);
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
                        <button className="btn-explore">Explore Now</button>
                    </li>)})
                }
            </ul>

        </div>
    )
}