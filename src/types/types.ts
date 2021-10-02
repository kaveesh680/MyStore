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