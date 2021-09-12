import {ADD_PRODUCT, DELETE_PRODUCT} from "../constants/ProductConstants";
import {IProductWithCategory} from "../../types/types";

export interface AddProduct {
    type: typeof ADD_PRODUCT,
    payload: IProductWithCategory
}

export interface DeleteProduct {
    type: typeof DELETE_PRODUCT,
    payload: string
}

export type ProductActionTypes = AddProduct | DeleteProduct