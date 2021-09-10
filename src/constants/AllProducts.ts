import {electronics} from "./electronics";
import {foods} from "./foods";
import {pharmacies} from "./pharmacies";
import {fruits} from "./fruits";
import {meats} from "./meats";
import {vegetables} from "./vegetables";
import {IProduct} from "../types/types";

export const AllProducts: IProduct[] = [...electronics, ...fruits, ...foods, ...meats, ...vegetables, ...pharmacies];