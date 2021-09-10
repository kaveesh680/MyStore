import {ADD_TO_CART, CHANGE_QUANTITY, DELETE_FROM_CART, UPDATE_CART} from "../constants/CartConstants";
import {ICheckoutProduct} from "../../types/types";

export interface AddToCart {
    type: typeof ADD_TO_CART,
    payload: ICheckoutProduct
}

export interface DeleteFromCart {
    type: typeof DELETE_FROM_CART,
    payload: string
}

export interface UpdateCart {
    type: typeof UPDATE_CART,
    payload: ICheckoutProduct
}

export interface ChangeQuantity {
    type: typeof CHANGE_QUANTITY,
    payload: {
        id: string
        change: number
    }
}

export type CartActionTypes = AddToCart | DeleteFromCart | UpdateCart | ChangeQuantity