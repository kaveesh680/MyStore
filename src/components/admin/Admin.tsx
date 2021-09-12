import React, {lazy, Suspense} from "react";
import {Route, Switch, useLocation, useRouteMatch} from "react-router-dom";
import Loading from "../loading/Loading";

const AdminNavBar = lazy(() => import("./AdminNavBar"));
const AdminProducts = lazy(() => import("./all-productUX/AdminProducts"));
const DashBoard = lazy(() => import("./dashboard/DashBoard"));
const Orders = lazy(() => import("./orders/Orders"));
const AddProduct = lazy(() => import("./add-product/AddProduct"));

const Admin: React.FC = () => {

    let {path} = useRouteMatch();
    let location = useLocation();

    return (
        <React.Fragment>
            <AdminNavBar/>
            <Suspense fallback={<Loading/>}>
                <Switch location={location}>
                    <Route path={`${path}/products`}>
                        <AdminProducts/>
                    </Route>
                    <Route path={`${path}/add-product`}>
                        <AddProduct/>
                    </Route>
                    <Route path={`${path}/orders`}>
                        <Orders/>
                    </Route>
                    <Route path={`${path}/dashboard`}>
                        <DashBoard/>
                    </Route>
                </Switch>
            </Suspense>
        </React.Fragment>
    )
}

export default Admin;