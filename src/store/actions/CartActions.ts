import {ICheckoutProduct} from "../../types/types";
import {AddToCart, ChangeQuantity, DeleteFromCart, UpdateCart} from "../types/CartActionTypes";
import {ADD_TO_CART, CHANGE_QUANTITY, DELETE_FROM_CART, UPDATE_CART} from "../constants/CartConstants";

export const addToCart = (checkoutProduct: ICheckoutProduct): AddToCart => {
    return {
        type: ADD_TO_CART,
        payload: checkoutProduct
    }
}

export const deleteFromCart = (id: string): DeleteFromCart => {
    return {
        type: DELETE_FROM_CART,
        payload: id
    }
}

export const updateCart = (checkoutProduct: ICheckoutProduct): UpdateCart => {
    return {
        type: UPDATE_CART,
        payload: checkoutProduct
    }
}

export const changeQuantity = (id: string, change: number): ChangeQuantity => {
    return {
        type: CHANGE_QUANTITY,
        payload: {
            id: id,
            change: change
        }
    }
}