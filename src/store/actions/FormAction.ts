import {IDeliveryForm, IShippingForm} from '../../types/types';
import {
    ADD_DELIVERY_FORM_DETAILS,
    ADD_SHIPPING_FORM_DETAILS,
    DELETE_ORDER_FORM_DETAILS
} from '../constants/FormConstants';
import {AddDeliveryFormDetails, AddShippingFormDetails, DeleteOrderFormDetails} from '../types/FormActionTypes';

export const addDeliveryFormDetails = (deliveryFormDetails: IDeliveryForm): AddDeliveryFormDetails => {
    return {
        type: ADD_DELIVERY_FORM_DETAILS,
        payload: deliveryFormDetails
    }
}

export const addShippingFormDetails = (shippingFormDetails: IShippingForm): AddShippingFormDetails => {
    return {
        type: ADD_SHIPPING_FORM_DETAILS,
        payload: shippingFormDetails
    }
}

export const deleteFormDetails = (): DeleteOrderFormDetails => {
    return {
        type: DELETE_ORDER_FORM_DETAILS
    }
}