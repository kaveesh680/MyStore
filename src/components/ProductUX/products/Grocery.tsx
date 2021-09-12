import React, {useEffect, useState} from "react";
import {ICheckoutFilterProducts, ICheckoutProduct, IProduct} from "../../../types/types";
import {useSelector} from "react-redux";
import {RootState} from "../../../store/reducers/RootReducer";
import Products from "../Products";
import GetCheckoutProducts from "./GetCheckoutProducts";

const Grocery: React.FC = () => {
    const checkoutProducts: ICheckoutProduct[] = useSelector((state: RootState) => state.cartReducer.productsInCart);
    const fruits: IProduct[] = useSelector((state: RootState) => state.productReducer.fruit);
    const meats: IProduct[] = useSelector((state: RootState) => state.productReducer.meat);
    const vegetables: IProduct[] = useSelector((state: RootState) => state.productReducer.vegetable);
    const [groceryProducts, setGroceryProducts] = useState<ICheckoutFilterProducts[]>([]);

    useEffect(() => {
        setGroceryProducts([{
            category: "Fruit",
            unit: false,
            products: GetCheckoutProducts([...fruits, ...meats, ...vegetables], checkoutProducts)
        }])
    }, [checkoutProducts])

    return (
        <Products products={groceryProducts}/>
    )
}

export default Grocery;