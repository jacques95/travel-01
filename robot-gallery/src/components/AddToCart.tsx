import shoppingCart from "./ShoppingCart";

export const useAddToCart = () =>{
    const addToCart = (id,name)=>{
        if (setState){
            setState ((state)=>{
                ...state,
                    shoppingCart:{
                    items:[...state.shoppingCart.items, {id,name}]
                }
            })
        }
    }
    return addToCart
}
