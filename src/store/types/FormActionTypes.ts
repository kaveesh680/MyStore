import {ADD_DELIVERY_FORM_DETAILS, ADD_SHIPPING_FORM_DETAILS, DELETE_ORDER_FORM_DETAILS} from '../constants/FormConstants';
import {IDeliveryForm, IShippingForm} from '../../types/types';

export interface AddDeliveryFormDetails{
    type:typeof ADD_DELIVERY_FORM_DETAILS,
    payload:IDeliveryForm
}

export interface AddShippingFormDetails{
    type:typeof ADD_SHIPPING_FORM_DETAILS,
    payload:IShippingForm
}

export interface DeleteOrderFormDetails{
    type:typeof DELETE_ORDER_FORM_DETAILS,
}

export type FormActionTypes = AddDeliveryFormDetails | AddShippingFormDetails | DeleteOrderFormDetails