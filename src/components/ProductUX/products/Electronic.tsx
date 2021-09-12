import React, {useEffect, useState} from "react";
import {ICheckoutFilterProducts, ICheckoutProduct, IProduct} from "../../../types/types";
import {useSelector} from "react-redux";
import {RootState} from "../../../store/reducers/RootReducer";
import Products from "../Products";
import GetCheckoutProducts from "./GetCheckoutProducts";

const Electronic: React.FC = () => {
    const checkoutProducts: ICheckoutProduct[] = useSelector((state: RootState) => state.cartReducer.productsInCart);
    const electronics: IProduct[] = useSelector((state: RootState) => state.productReducer.electronic);
    const [electronicProducts, setElectronicProducts] = useState<ICheckoutFilterProducts[]>([]);

    useEffect(() => {
        setElectronicProducts([{
            category: "Electronic",
            unit: false,
            products: GetCheckoutProducts(electronics,checkoutProducts)
        }])
    }, [checkoutProducts,electronics])

    return (
        <Products products={electronicProducts}/>
    )
}

export default Electronic;