import {IDeliveryForm, IShippingForm} from '../../types/types';
import {FormActionTypes} from '../types/FormActionTypes';
import {
    ADD_DELIVERY_FORM_DETAILS,
    ADD_SHIPPING_FORM_DETAILS,
    DELETE_ORDER_FORM_DETAILS
} from '../constants/FormConstants';

const initialState: FormStateType = {
    deliveryForm: null,
    shippingForm: null
}

interface FormStateType {
    deliveryForm: IDeliveryForm | null,
    shippingForm: IShippingForm | null
}

export const FormReducer = (state: FormStateType = initialState, action: FormActionTypes) => {
    switch (action.type) {
        case ADD_DELIVERY_FORM_DETAILS: {
            return {
                ...state, deliveryForm: action.payload
            }
        }

        case ADD_SHIPPING_FORM_DETAILS: {
            return {
                ...state, shippingForm: action.payload
            }
        }

        case DELETE_ORDER_FORM_DETAILS: {
            return {
                ...state, deliveryForm: null, shippingForm: null
            }
        }

        default: {
            return state
        }
    }
}

