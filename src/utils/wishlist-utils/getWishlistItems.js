import axios from 'axios';


export const getWishlistItems = async (encodedToken) => {
    try{
        const response = await axios({
            method: 'GET',
            url: '/api/user/wishlist',
            headers:{
                authorization: encodedToken
            }
        })
        if(response.status === 200)
          return response;

    }catch(e){
        console.log(e);
    }
}