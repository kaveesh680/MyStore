import React, {lazy, Suspense, useEffect} from "react";
import {Redirect, Route, Switch, useLocation, useRouteMatch} from "react-router-dom";
import {foods} from "../../constants/foods";
import {pharmacies} from "../../constants/pharmacies";
import {electronics} from "../../constants/electronics";
import Loading from "../loading/Loading";
import {ICheckoutFilterProduct, ICheckoutFilterProducts, ICheckoutProduct, IProduct} from "../../types/types";
import {useSelector} from "react-redux";
import {RootState} from "../../store/reducers/RootReducer";
import {fruits} from "../../constants/fruits";
import {meats} from "../../constants/meats";
import {vegetables} from "../../constants/vegetables";

const Products = lazy(() => import('../ProductUX/Products'));

const ProductsRoutes: React.FC = () => {
    const checkoutProducts: ICheckoutProduct[] = useSelector((state: RootState) => state.cartReducer.productsInCart);

    const GetCheckoutProducts = (products: IProduct[]) => {
        const filterProducts: ICheckoutFilterProduct[] = [];
        products.map((product: IProduct, index: number) => {
            checkoutProducts.map((checkoutProduct: ICheckoutProduct) => {
                if (checkoutProduct.id === product.id) {
                    filterProducts.push({product: product, inCart: true, quantity: checkoutProduct.quantity});
                    return;
                }
            })
            if (filterProducts.length === index) {
                filterProducts.push({product: product, inCart: false, quantity: 1})
            }
        })
        return filterProducts;
    }
    const ElectronicProducts: ICheckoutFilterProducts[] =
        [{
            category: "Electronic",
            unit: false,
            products: GetCheckoutProducts(electronics)
        }];
    const FoodProducts: ICheckoutFilterProducts[] =
        [{
            category: "Foods",
            unit: false,
            products: GetCheckoutProducts(foods)
        }];
    const FruitProducts: ICheckoutFilterProducts[] =
        [{
            category: "Fruits",
            unit: true,
            products: GetCheckoutProducts(fruits)
        }];
    const MeatProducts: ICheckoutFilterProducts[] =
        [{
            category: "Meats",
            unit: true,
            products: GetCheckoutProducts(meats)
        }];
    const PharmacyProducts: ICheckoutFilterProducts[] =
        [{
            category: "Pharmacies",
            unit: false,
            products: GetCheckoutProducts(pharmacies)
        }];
    const VegetableProducts: ICheckoutFilterProducts[] =
        [{
            category: "Vegetables",
            unit: true,
            products: GetCheckoutProducts(vegetables)
        }];
    const GroceryProducts: ICheckoutFilterProducts[] = [...MeatProducts, ...FruitProducts, ...VegetableProducts];


    let {path} = useRouteMatch();
    let location = useLocation();

    return (
        <Suspense fallback={<Loading/>}>
            <Switch location={location}>
                <Route path={`${path}/All`}>
                    <Products products={GroceryProducts}/>
                    <Products products={FoodProducts}/>
                    <Products products={PharmacyProducts}/>
                    <Products products={ElectronicProducts}/>
                </Route>
                <Route path={`${path}/Electronic`}>
                    <Products products={ElectronicProducts}/>
                </Route>
                <Route path={`${path}/Grocery`}>
                    <Products products={GroceryProducts}/>
                </Route>
                <Route path={`${path}/Pharmacy`}>
                    <Products products={PharmacyProducts}/>
                </Route>
                <Route path={`${path}/Food`}>
                    <Products products={FoodProducts}/>
                </Route>
                <Route path={`/`}>
                    <Redirect to={`${path}/Grocery`}/>
                </Route>
            </Switch>
        </Suspense>
    )
}

export default ProductsRoutes;