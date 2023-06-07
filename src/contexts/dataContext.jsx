import { createContext, useContext, useEffect, useReducer, useState} from 'react';
import axios from 'axios';
import { AuthContext } from './authenticationContext';
import { productReducer } from '../reducers/productReducer';
import {getCartItems} from '../utils/cart-utils/getCartItems';
import {getWishlistItems} from '../utils/wishlist-utils/getWishlistItems';

export const DataContext = createContext();

export function DataProvider({children}){
    const [loader, setLoader] = useState(false);
    const {authState} = useContext(AuthContext);

    const testUserAddress = [
        {
            id: 1,
            userName: 'Sharath',
            houseNumber: '12-124/8, KU colony, Hanmakonda',
            city: 'Warangal',
            state: 'Telangana',
            country: 'India',
            pincode: 500032,
            mobileNumber: 1234567890
        }
      ];

    const initialState = {
        products: [],
        categories: [],
        cart:[],
        wishlist:[],
        address: testUserAddress
    }

    const [state, productDispatch] = useReducer(productReducer, initialState);

    const encodedToken = localStorage.getItem('token');

    const getCategories = async () =>{
        try{
           const {data,status} = await axios.get('/api/categories');
           if(status===200)
           productDispatch({type:'INITIALIZE_CATEGORIES', payload: data.categories})
        }catch(e){
            console.log(e);
        }
    }

    const getProducts = async () =>{
        try{
           const {data,status} = await axios.get('/api/products');
           if(status===200)
           productDispatch({type:'INITIALIZE_PRODUCTS', payload: data.products})
        }catch(e){
            console.log(e);
        }
    }

    const getProduct = async (productId) =>{
        try{
           const {status,data} = await axios.get(`/api/products/${productId}`);
           if(status === 200)
              return data;
        }catch(e){
           console.log(e);
        }
   }

   const setItems = async () =>{
       try{
           const cartResponse = await getCartItems(encodedToken);
           const wishlistResponse = await getWishlistItems(encodedToken);
           if(cartResponse.status === 200)
            productDispatch({type:'SET_CART', payload: cartResponse?.data?.cart});
           if(wishlistResponse.status === 200)
            productDispatch({type:'SET_WISHLIST', payload: wishlistResponse?.data?.wishlist});
       }catch(e){
           console.error(e)
       }
   }

     useEffect(()=>{
       setLoader(true);
       getProducts();
       getCategories();
       !authState.isLoggedIn && clearItems();
       authState?.isLoggedIn && setItems();
       const id = setTimeout(()=>{
           setLoader(false);
       }, 1000);
       return () => clearTimeout(id);
      // eslint-disable-next-line
     }, [productDispatch, authState?.isLoggedIn])


     const clearItems = () =>{
       productDispatch({type:'SET_CART',payload: []});
       productDispatch({type:'SET_WISHLIST',payload: []})
     }

     return (
        <DataContext.Provider value={{state,productDispatch, getProduct, loader, setLoader}}>
            {children}
        </DataContext.Provider>
    )
}