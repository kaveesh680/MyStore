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
    productDetails: IProduct[]
}

export interface Item {
    id: string
    name: string
    image: string
    currentPrice: number
    oldPrice: number | null
}

export interface IProduct {
    product: Item,
    inCart: boolean
}

export interface ICheckoutProduct {
    quantity: number,
    product: Item
}

export interface IOption {
    value: string,
    label: string,
    flag: string
}