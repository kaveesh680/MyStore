import React, {useEffect, useState} from "react";
import {ICheckoutFilterProducts, ICheckoutProduct} from "../../../types/types";
import {useSelector} from "react-redux";
import {RootState} from "../../../store/reducers/RootReducer";
import {fruits} from "../../../constants/fruits";
import {meats} from "../../../constants/meats";
import {vegetables} from "../../../constants/vegetables";
import Products from "../Products";
import GetCheckoutProducts from "./GetCheckoutProducts";

const Grocery: React.FC = () => {
    const checkoutProducts: ICheckoutProduct[] = useSelector((state: RootState) => state.cartReducer.productsInCart);
    const [groceryProducts, setGroceryProducts] = useState<ICheckoutFilterProducts[]>([]);

    useEffect(() => {
        setGroceryProducts([{
            category: "Fruit",
            unit: false,
            products: GetCheckoutProducts([...fruits, ...meats, ...vegetables],checkoutProducts)
        }])
    }, [checkoutProducts])

    return (
        <Products products={groceryProducts}/>
    )
}

export default Grocery;