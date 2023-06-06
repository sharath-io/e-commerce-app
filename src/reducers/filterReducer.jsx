export const filterReducer = (filtersState, action) => {
    switch (action.type) {
        case 'SEARCH_TEXT': return { ...filtersState, search: action.payload };
        case 'FILTER_CATEGORY': return {
            ...filtersState,
            categoryFilter: filtersState.categoryFilter.includes(action.payload)
                ? filtersState.categoryFilter.filter(category => category !== action.payload)
                : [...filtersState.categoryFilter, action.payload]
        };
        case 'SORT_BY_PRICE': return { ...filtersState, sortType: action.payload };
        case 'CLEAR_ALL_FILTERS': return { search: '', categoryFilter: [], sortType: '', priceRange: 10000,ratingNumber:'' };
        case 'PRICE_RANGE': return { ...filtersState, priceRange: action.payload };
        case 'SORT_BY_RATING': return {...filtersState, ratingNumber: action.payload}
        default: return filtersState;
    }
};
