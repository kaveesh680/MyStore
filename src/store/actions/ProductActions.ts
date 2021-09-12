import {IProductWithCategory} from "../../types/types";
import {AddProduct, DeleteProduct} from "../types/ProductActionTypes";
import {ADD_PRODUCT, DELETE_PRODUCT} from "../constants/ProductConstants";

export const addProduct = (product: IProductWithCategory): AddProduct => {
    return {
        type: ADD_PRODUCT,
        payload: product
    }
}

export const deleteProduct = (id: string): DeleteProduct => {
    return {
        type: DELETE_PRODUCT,
        payload: id
    }
}