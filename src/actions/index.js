
import * as Types from './../constants/ActionType';

export const actAddToCart = (product,quantity) =>{
    return{
        type : Types.ADD_TO_CART,
        product,
        quantity
    }
}

export const actChangeMesage = (mesage)=>{
    return{
        type : Types.CHANGE_MESAGE,
        mesage
    }
}

export const actDeleteInCart = (product)=>{
    return{
        type : Types.DELETE_PRODUCT_IN_CART,
        product
    }
}

export const actUpdateInCart = (product,quantity)=>{
    return{
        type : Types.UPDATE_PRODUCT_IN_CART,
        product,
        quantity
    }
}