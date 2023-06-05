import { createContext, useContext, useReducer } from "react";
import { DataContext } from "..";
import { filterReducer } from "../reducers/filterReducer";

export const FilterContext= createContext();

export function FilterProvider({children}){
   const {state} = useContext(DataContext);

   const [filtersState,dispatchFilter] = useReducer(filterReducer, {
    search:'',
    priceRange:10000,
    categoryFilter: [],
    sortType: '',
    
   })



   const searchFilteredData = filtersState?.search?.length > 0
   ? state.products?.filter(({title}) => title.toLowerCase().includes(filtersState?.search.toLowerCase()))
   : state.products;

   const priceRangeFilteredData= searchFilteredData.filter(({price})=> Number(price) <=Number(filtersState.priceRange))


   const categoryFilteredData = filtersState?.categoryFilter?.length>0
   ? priceRangeFilteredData?.filter(({categoryName}) => filtersState.categoryFilter.includes(categoryName))
   : priceRangeFilteredData;


    const sortFilteredData = filtersState?.sortType?.length>0 
    ?[...categoryFilteredData].sort((item1,item2) => filtersState.sortType==='lth' ? item1.price - item2.price : item2.price - item1.price)
    : categoryFilteredData


    return (
        <FilterContext.Provider value={{filtersState, dispatchFilter, sortFilteredData}}>
            {children}
        </FilterContext.Provider>
    )
}