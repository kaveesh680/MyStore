import React from "react";
import {ICategories} from "../../types/types";
import Category from "./Category";
import {Categories as categories} from "../../constants/Categories";

const Categories: React.FC = () => {
    return (
        <React.Fragment>
            {categories.map((category: ICategories, index:number) => {
                return <Category image={category.image} category={category.category} key={index}/>
            })}
        </React.Fragment>
    )
}

export default Categories;