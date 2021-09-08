import {ICategories} from "../types/types";
import all from "../assets/images/categories/all.webp";
import grocery from "../assets/images/categories/grocery.webp";
import pharmacy from "../assets/images/categories/pharmacy.webp";
import food from "../assets/images/categories/food.webp";
import electronic from "../assets/images/categories/electronic.webp";

export const Categories: ICategories[] = [
  {
    image: all,
    category: 'All'
  },
  {
    image: grocery,
    category: 'Grocery'
  },
  {
    image: pharmacy,
    category: 'Pharmacy'
  },
  {
    image: food,
    category: 'Food'
  },
  {
    image: electronic,
    category: 'Electronic'
  }
];
