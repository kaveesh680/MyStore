import React, {lazy, Suspense} from "react";
import {Redirect, Route, Switch, useLocation, useRouteMatch} from "react-router-dom";
import Loading from "../loading/Loading";

const Grocery = lazy(() => import("../ProductUX/products/Grocery"));
const Pharmacy = lazy(() => import("../ProductUX/products/Pharmacy"));
const Food = lazy(() => import("../ProductUX/products/Food"));
const Electronic = lazy(() => import("../ProductUX/products/Electronic"));

const ProductsRoutes: React.FC = () => {

    let {path} = useRouteMatch();
    let location = useLocation();

    return (
        <Suspense fallback={<Loading/>}>
            <Switch location={location}>
                <Route path={`${path}/All`}>
                    <Grocery/>
                    <Food/>
                    <Pharmacy/>
                    <Electronic/>
                </Route>
                <Route path={`${path}/Electronic`}>
                    <Electronic/>
                </Route>
                <Route path={`${path}/Grocery`}>
                    <Grocery/>
                </Route>
                <Route path={`${path}/Pharmacy`}>
                    <Pharmacy/>
                </Route>
                <Route path={`${path}/Food`}>
                    <Food/>
                </Route>
                <Route path={`/`}>
                    <Redirect to={`${path}/Grocery`}/>
                </Route>
            </Switch>
        </Suspense>
    )
}

export default ProductsRoutes;