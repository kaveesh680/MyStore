import {ICheckoutFilterProducts, IProduct} from "../types/types";
import bairaha from "../assets/images/products/meat/bairaha.webp";
import chickenDrumstick from "../assets/images/products/meat/chickendrumstick.webp";
import chickenWings from "../assets/images/products/meat/chickenwings.webp";
import hurulla from "../assets/images/products/meat/hurulla.webp";
import linna from "../assets/images/products/meat/linna.webp";
import paraw from "../assets/images/products/meat/paraw.webp";
import prawns from "../assets/images/products/meat/prawns.webp";
import tuna from "../assets/images/products/meat/tuna.webp";

export const meats: IProduct[] = [
    {id: "0061", name: "Bairaha", image: bairaha, currentPrice: 75, oldPrice: 85},
    {id: "0062", name: "Chicken", image: chickenDrumstick, currentPrice: 35, oldPrice: null},
    {id: "0063", name: "Wings", image: chickenWings, currentPrice: 35, oldPrice: 45},
    {id: "0064", name: "Hurulla", image: hurulla, currentPrice: 35, oldPrice: null},
    {id: "0065", name: "Linna", image: linna, currentPrice: 35, oldPrice: 45},
    {id: "0082", name: "Prawns", image: prawns, currentPrice: 35, oldPrice: null},
    {id: "0083", name: "Paraw", image: paraw, currentPrice: 35, oldPrice: 45},
    {id: "0084", name: "Tuna", image: tuna, currentPrice: 35, oldPrice: null}
];

