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
    const [fruitProducts, setFruitProducts] = useState<ICheckoutFilterProducts[]>([]);
    const [meatProducts, setMeatProducts] = useState<ICheckoutFilterProducts[]>([]);
    const [vegetableProducts, setVegetableProducts] = useState<ICheckoutFilterProducts[]>([]);


    useEffect(() => {
        setFruitProducts([{
            category: "Fruit",
            unit: true,
            products: GetCheckoutProducts([...fruits], checkoutProducts)
        }])
        setMeatProducts([{
            category: "Meat",
            unit: true,
            products: GetCheckoutProducts([...meats], checkoutProducts)
        }])
        setVegetableProducts([{
            category: "Vegetable",
            unit: true,
            products: GetCheckoutProducts([...vegetables], checkoutProducts)
        }])
    }, [checkoutProducts])

    return (
        <React.Fragment>
            <Products products={fruitProducts}/>
            <Products products={meatProducts}/>
            <Products products={vegetableProducts}/>
        </React.Fragment>

    )
}

export default Grocery;