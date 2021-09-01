import React, {lazy, Suspense} from "react";
import Loading from "./components/loading/Loading";

const TopNavBar = lazy(() => import('./components/top-nav-bar/TopNavBar'));
const Welcome = lazy(() => import('./components/welcome-banner/Welcome'));
const BottomNavBar = lazy(() => import('./components/bottom-nav-bar/BottomNavBar'));
const SearchBar = lazy(() => import('./components/search-bar/SearchBar'));
const CategoryArea = lazy(() => import('./components/categories/CategoryArea'));
const Products = lazy(() => import('./components/ProductUX/Products'));
const Footer = lazy(() => import('./components/footer/Footer'));

const Client: React.FC = () => {
    return (
        <React.Fragment>
            <Suspense fallback={<Loading/>}>
                <TopNavBar/>
                <BottomNavBar/>
                <Welcome/>
                <SearchBar/>
                <CategoryArea/>
                <Products/>
                <Footer/>
            </Suspense>
        </React.Fragment>
    )
}

export default Client;