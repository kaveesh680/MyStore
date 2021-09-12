import {ICheckoutProduct} from "../../types/types";
import {CartActionTypes} from "../types/CartActionTypes";
import {ADD_TO_CART, CHANGE_QUANTITY, DELETE_FROM_CART, UPDATE_CART} from "../constants/CartConstants";

const initialState: cartStateType = {
    productsInCart: []
}

interface cartStateType {
    productsInCart: ICheckoutProduct[]
}

export const CartReducer = (state: cartStateType = initialState, action: CartActionTypes) => {
    switch (action.type) {
        case ADD_TO_CART: {
            return {
                ...state, productsInCart: [...state.productsInCart, action.payload]
            }
        }
        case DELETE_FROM_CART: {
            return {
                ...state,
                productsInCart: state.productsInCart.filter((product: ICheckoutProduct) => product.id !== action.payload)
            }
        }
        case UPDATE_CART: {
            return {
                ...state, productsInCart: state.productsInCart.map((product: ICheckoutProduct) => {
                    if (product.id === action.payload.id) {
                        return action.payload
                    }
                    return product
                })
            }
        }
        case CHANGE_QUANTITY: {
            return {
                ...state, productsInCart: state.productsInCart.map((product: ICheckoutProduct) => {
                    if (product.id === action.payload.id) {
                        return {id: product.id, quantity: product.quantity + action.payload.change}
                    }
                    return product
                })
            }
        }
        default:
            return state
    }
}