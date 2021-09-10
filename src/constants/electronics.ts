import {ICheckoutFilterProducts, IProduct} from "../types/types";
import Blender from "../assets/images/products/electronic/blender.webp";
import CoffeeMaker from "../assets/images/products/electronic/cofee maker.webp";
import iron from "../assets/images/products/electronic/iron.webp";
import macbook from "../assets/images/products/electronic/macbook.webp";
import microwave from "../assets/images/products/electronic/microwave.webp";
import refrigerator from "../assets/images/products/electronic/refregirator.webp";
import mobile from "../assets/images/products/electronic/mobile.webp";

export const electronics: IProduct[] = [
    {id: "0501", name: "Blender", image: Blender, currentPrice: 75, oldPrice: 85}
    ,
    {id: "0502", name: "Coffee-Maker", image: CoffeeMaker, currentPrice: 35, oldPrice: null}
    ,
    {id: "0503", name: "Iron", image: iron, currentPrice: 35, oldPrice: 45}
    ,
    {id: "0504", name: "Note 10+", image: mobile, currentPrice: 35, oldPrice: null}
    ,
    {id: "0505", name: "Mac Book", image: macbook, currentPrice: 35, oldPrice: 45}
    ,
    {id: "0506", name: "Microwave", image: microwave, currentPrice: 35, oldPrice: null}
    ,
    {id: "0507", name: "Refrigerators", image: refrigerator, currentPrice: 35, oldPrice: 45}
];
