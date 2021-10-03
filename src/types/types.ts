export interface optionTypes {
    label: string
    value: string
}

export interface ICategories {
    image: string
    category: string
}

export interface IProducts {
    category: string
    products: IProduct[]
}

export interface ICheckoutFilterProducts {
    category: string
    unit: boolean
    products: ICheckoutFilterProduct[]
}

export interface IProduct {
    id: string
    name: string
    image: string
    currentPrice: number
    oldPrice: number | null
}

export interface IProductWithCategory {
    category: string
    product: IProduct
}

export interface ICheckoutProduct {
    id: string,
    quantity: number
}

export interface ICheckoutFilterProduct {
    product: IProduct
    inCart: boolean
    quantity: number
}

export interface IOption {
    value: string,
    label: string,
    flag: string
}

export interface ISelectOption {
    label: string,
    value: string
}

export interface IDeliveryForm {
    fullName: string,
    address: string,
    city: string,
    postalCode: string,
    country: string,
    countryCode: string,
    phoneNumber: string,
    email: string,
    paymentMethod: string,
    password: string,
    retypeEmail: string,
    checkBtn: boolean
    instruction: string | null
}

export interface IShippingForm {
    name: string,
    billingAddress: string,
    city: string,
    postalCode: string,
    country: string,
    countryCode: string,
    phoneNumber: string
}

export interface IOrder {
    _id:string
    user_id: string
    order_items: {
        product: {
            _id: string
            name: string
            image: string
            current_price: number
            old_price: number | null
            key: string
        },
        quantity: number
    }[]
    date: string
    discount: number
    sub_total: number
    payment_method: string
    status: boolean
    instruction: string
    delivery: {
        full_name: string
        address: string
        city: string
        postal_code: number
        country: string
        email: string
        contact_number: string
    }
    shipping: {
        billing_address: string
        name: string
        city: string
        postal_code: number
        country: string
        contact_number: string
    }
}

export interface IOrderProduct {
    product: {
        _id: string
        name: string
        image: string
        current_price: number
        old_price: number | null
        key: string
    },
    quantity: number
}