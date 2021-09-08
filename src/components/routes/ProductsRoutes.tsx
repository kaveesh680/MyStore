import React, {lazy, Suspense} from "react";
import {Redirect, Route, Switch, useLocation, useRouteMatch} from "react-router-dom";
import {GroceryProducts} from "../../constants/Groceries";
import {FoodProducts} from "../../constants/foods";
import {PharmacyProducts} from "../../constants/pharmacies";
import {ElectronicProducts} from "../../constants/electronics";
import Loading from "../loading/Loading";

const Products = lazy(() => import('../ProductUX/Products'));

const ProductsRoutes: React.FC = () => {

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
                <Route path={`${path}/Grocery`}>
                    <Products products={GroceryProducts}/>
                </Route>
                <Route path={`${path}/Electronic`}>
                    <Products products={ElectronicProducts}/>
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