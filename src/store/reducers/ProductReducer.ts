import {IProduct} from "../../types/types";
import {electronics} from "../../constants/electronics";
import {foods} from "../../constants/foods";
import {fruits} from "../../constants/fruits";
import {meats} from "../../constants/meats";
import {vegetables} from "../../constants/vegetables";
import {pharmacies} from "../../constants/pharmacies";
import {ProductActionTypes} from "../types/ProductActionTypes";
import {ADD_PRODUCT} from "../constants/ProductConstants";

const initialState: productStateType = {
    electronic: electronics,
    food: foods,
    fruit: fruits,
    meat: meats,
    vegetable: vegetables,
    pharmacy: pharmacies
}

interface productStateType {
    electronic: IProduct[]
    food: IProduct[]
    fruit: IProduct[]
    meat: IProduct[]
    vegetable: IProduct[]
    pharmacy: IProduct[]
}

export const ProductReducer = (state: productStateType = initialState, action: ProductActionTypes) => {
    switch (action.type) {
        case ADD_PRODUCT: {
            switch (action.payload.category) {
                case "Electronic": {
                    return {
                        ...state, electronic: [...state.electronic, action.payload.product]
                    }
                }
                case "Food": {
                    return {
                        ...state, food: [...state.food, action.payload.product]
                    }
                }
                case "Fruit": {
                    return {
                        ...state, fruit: [...state.fruit, action.payload.product]
                    }
                }
                case "Meat": {
                    return {
                        ...state, meat: [...state.meat, action.payload.product]
                    }
                }
                case "Vegetable": {
                    return {
                        ...state, vegetable: [...state.vegetable, action.payload.product]
                    }
                }
                case "Pharmacy": {
                    return {
                        ...state, pharmacy: [...state.pharmacy, action.payload.product]
                    }
                }
                default:
                    return state
            }
        }
        case "DELETE_PRODUCT": {
            return {
                ...state,
                electronic: state.electronic.filter((product: IProduct) => product.id !== action.payload),
                food: state.food.filter((product: IProduct) => product.id !== action.payload),
                fruit: state.fruit.filter((product: IProduct) => product.id !== action.payload),
                meat: state.meat.filter((product: IProduct) => product.id !== action.payload),
                vegetable: state.vegetable.filter((product: IProduct) => product.id !== action.payload),
                pharmacy: state.pharmacy.filter((product: IProduct) => product.id !== action.payload)
            }
        }
        default:
            return state
    }
}