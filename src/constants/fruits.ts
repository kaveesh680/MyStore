import {ICheckoutFilterProducts, IProduct} from "../types/types";
import apple from "../assets/images/products/fruits/apple.webp";
import banana from "../assets/images/products/fruits/banana.webp";
import orange from "../assets/images/products/fruits/orange.webp";
import papaya from "../assets/images/products/fruits/papaya.webp";
import strawBerry from "../assets/images/products/fruits/strawberry.webp";

export const fruits: IProduct[] = [
    {id: "0071", name: "Apple", image: apple, currentPrice: 75, oldPrice: 85},
    {id: "0072", name: "Banana", image: banana, currentPrice: 35, oldPrice: null},
    {id: "0073", name: "Orange", image: orange, currentPrice: 35, oldPrice: 45},
    {id: "0074", name: "Papaya", image: papaya, currentPrice: 35, oldPrice: null},
    {id: "0075", name: "Straw Berry", image: strawBerry, currentPrice: 35, oldPrice: 45}
];




