import React, {lazy, Suspense} from "react";
import Loading from "../loading/Loading";
import {Redirect, Route, Switch, useLocation} from 'react-router-dom';

const Welcome = lazy(() => import('../welcome-banner/Welcome'));
const SearchBar = lazy(() => import('../search-bar/SearchBar'));
const CategoryArea = lazy(() => import('../categories/CategoryArea'));
const CheckOut = lazy(() => import('../cart-table/Checkout'));
const CashOnDelivery = lazy(() => import('../checkout-form/CashOnDelivery'));
const LogIn = lazy(() => import('../login/LogIn'));
const Register = lazy(() => import('../register/Register'));
const ProductRoutes = lazy(() => import('../routes/ProductsRoutes'));

const Routes: React.FC = () => {

    let location = useLocation();

    return (
        <Suspense fallback={<Loading/>}>
            <Switch location={location}>
                <Route path='/register'>
                    <Register/>
                </Route>
                <Route path='/login'>
                    <LogIn/>
                </Route>
                <Route path='/checkout'>
                    <CheckOut/>
                    <CashOnDelivery/>
                </Route>
                <Route path='/home'>
                    <Welcome/>
                    <SearchBar/>
                    <CategoryArea/>
                    <ProductRoutes/>
                </Route>
                <Route path='/'>
                    <Redirect to='/home'/>
                </Route>
            </Switch>
        </Suspense>
    )
}

export default Routes;
