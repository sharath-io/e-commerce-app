import { createContext, useEffect, useReducer} from 'react';
import axios from 'axios';

export const DataContext = createContext();


const reducerFunction =(state,action)=>{
    switch(action.type){
        case 'CATEGORIES': return {...state, categories:action.payload}
        default : return state;
    }

}

export function DataProvider({children}){

    const initialState = {
        products: [],
        categories: [],
        cart:[],
        wishlist:[]
    }

    const [state, dispatch] = useReducer(reducerFunction, initialState);

    const getCategories = async () =>{
        try{
           const {data,status} = await axios.get('/api/categories');
           if(status===200)
            dispatch({type:'CATEGORIES', payload: data.categories})
        }catch(e){
            console.log(e);
        }
    }

    useEffect(()=>{
        getCategories();
    },[]);


    return (
        <DataContext.Provider value={{state,dispatch}}>
            {children}
        </DataContext.Provider>
    )
}