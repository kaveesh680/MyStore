import React, {lazy, Suspense} from "react";
import Loading from "./components/loading/Loading";
import {Route, Switch} from 'react-router-dom';

const Welcome = lazy(() => import('./components/welcome-banner/Welcome'));
const SearchBar = lazy(() => import('./components/search-bar/SearchBar'));
const CategoryArea = lazy(() => import('./components/categories/CategoryArea'));
const Products = lazy(() => import('./components/ProductUX/Products'));

const Routes: React.FC = () => {
    return (
        <Suspense fallback={<Loading/>}>
            <Switch>
                <Route path='/home' exact>
                    <Welcome/>
                    <SearchBar/>
                    <CategoryArea/>
                    <Products/>
                </Route>
            </Switch>
        </Suspense>
    )
}

export default Routes;
