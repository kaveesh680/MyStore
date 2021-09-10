import React, {useEffect, useState} from "react";
import {ICheckoutFilterProducts, ICheckoutProduct} from "../../../types/types";
import {useSelector} from "react-redux";
import {RootState} from "../../../store/reducers/RootReducer";
import {foods} from "../../../constants/foods";
import Products from "../Products";
import GetCheckoutProducts from "./GetCheckoutProducts";

const Food: React.FC = () => {
    const checkoutProducts: ICheckoutProduct[] = useSelector((state: RootState) => state.cartReducer.productsInCart);
    const [foodProducts, setFoodProducts] = useState<ICheckoutFilterProducts[]>([]);

    useEffect(() => {
        setFoodProducts([{
            category: "Food",
            unit: false,
            products: GetCheckoutProducts(foods,checkoutProducts)
        }])
    }, [checkoutProducts])

    return (
        <Products products={foodProducts}/>
    )
}

export default Food;