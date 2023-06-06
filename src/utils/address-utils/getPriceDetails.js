export function getPriceDetails(myCart){
    return myCart.reduce(
        ({price,discount}, product) =>{
            price = price + product.originalPrice * product.qty;
            discount = discount + (product.originalPrice- product.sellingPrice) * product.qty;
            return  {price,discount}
        }, 
        {
            price: 0,
            discount: 0
        }
    )
}