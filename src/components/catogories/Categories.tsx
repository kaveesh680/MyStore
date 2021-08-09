import React from "react";
import {ICategories} from "../../types/types";
import All from "../../assets/images/categories/all.webp";
import Grocery from "../../assets/images/categories/grocery.webp";
import Pharmacy from "../../assets/images/categories/pharmacy.webp";
import Food from "../../assets/images/categories/food.webp";
import Electronic from "../../assets/images/categories/electronic.webp";
import Category from "./Category";

const Categories: React.FC = () => {
    const categories: ICategories[] = [
        {image: All, category: "All"},
        {image: Grocery, category: "Grocery"},
        {image: Pharmacy, category: "Pharmacy"},
        {image: Food, category: "Food"},
        {image: Electronic, category: "Electronic"}
    ]
    return (
        <React.Fragment>
            {categories.map((category: ICategories, index:number) => {
                return <Category image={category.image} category={category.category} key={index}/>
            })}
        </React.Fragment>
    )
}

export default Categories;