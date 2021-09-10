import React, {useEffect, useState} from "react";
import {ICheckoutFilterProducts, ICheckoutProduct} from "../../../types/types";
import {useSelector} from "react-redux";
import {RootState} from "../../../store/reducers/RootReducer";
import {pharmacies} from "../../../constants/pharmacies";
import Products from "../Products";
import GetCheckoutProducts from "./GetCheckoutProducts";

const Pharmacy: React.FC = () => {
    const checkoutProducts: ICheckoutProduct[] = useSelector((state: RootState) => state.cartReducer.productsInCart);
    const [pharmacyProducts, setPharmacyProducts] = useState<ICheckoutFilterProducts[]>([]);

    useEffect(() => {
        setPharmacyProducts([{
            category: "Fruit",
            unit: false,
            products: GetCheckoutProducts(pharmacies,checkoutProducts)
        }])
    }, [checkoutProducts])

    return (
        <Products products={pharmacyProducts}/>
    )
}

export default Pharmacy;