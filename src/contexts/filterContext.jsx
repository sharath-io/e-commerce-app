import { createContext, useContext, useReducer } from "react";
import { DataContext } from "..";

export const FilterContext= createContext();

const filterReducer =(filtersState,action) =>{
    switch(action.type){
        case 'SEARCH_TEXT': return {...filtersState, search:action.payload}
        case 'FILTER_CATEGORY' : return {...filtersState, 
             categoryFilter:   filtersState.categoryFilter.includes(action.payload)
             ? filtersState.categoryFilter.filter(category => category!==action.payload)
             : [...filtersState.categoryFilter,action.payload]   
            }
        case 'SORT_BY_PRICE': return {...filtersState, sortType: action.payload}
        case 'CLEAR_ALL_FILTERS': return {search:'',categoryFilter:[],sortType:''}
        default : return filtersState;
    }
}

export function FilterProvider({children}){
   const {state} = useContext(DataContext);

   const [filtersState,dispatchFilter] = useReducer(filterReducer, {
    search:'',
    categoryFilter: [],
    sortType: '',
   })



   const searchFilteredData = filtersState?.search?.length > 0
   ? state.products?.filter(({title}) => title.toLowerCase().includes(filtersState?.search.toLowerCase()))
   : state.products;


   const categoryFilteredData = filtersState?.categoryFilter?.length>0
   ? searchFilteredData?.filter(({categoryName}) => filtersState.categoryFilter.includes(categoryName))
   : searchFilteredData;


    const sortFilteredData = filtersState?.sortType?.length>0 
    ?[...categoryFilteredData].sort((item1,item2) => filtersState.sortType==='lth' ? item1.price - item2.price : item2.price - item1.price)
    : categoryFilteredData


    return (
        <FilterContext.Provider value={{filtersState, dispatchFilter, sortFilteredData}}>
            {children}
        </FilterContext.Provider>
    )
}