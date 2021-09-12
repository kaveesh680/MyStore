import React from "react";
import CartImage from "../../cart-table/CartImage";
import UnitPrice from "../../cart-table/UnitPrice";
import BootstrapTable, {PaginationOptions} from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import ProductAction from "./ProductAction";
import {IProduct, ISelectOption} from "../../../types/types";
import {useSelector} from "react-redux";
import {RootState} from "../../../store/reducers/RootReducer";
import filterFactory, {textFilter} from "react-bootstrap-table2-filter";
import {ValueType} from "react-select/src/types";

type AllProductsProps = {
    categories: ValueType<ISelectOption, true>
}

const AllProducts: React.FC<AllProductsProps> = (props) => {
    const {categories} = props;
    const fruits: IProduct[] = useSelector((state: RootState) => state.productReducer.fruit);
    const meats: IProduct[] = useSelector((state: RootState) => state.productReducer.meat);
    const vegetables: IProduct[] = useSelector((state: RootState) => state.productReducer.vegetable);
    const electronics: IProduct[] = useSelector((state: RootState) => state.productReducer.electronic);
    const pharmacies: IProduct[] = useSelector((state: RootState) => state.productReducer.pharmacy);
    const foods: IProduct[] = useSelector((state: RootState) => state.productReducer.food);

    const products: any = [];
    if (categories.length === 0) {
        [...electronics, ...fruits, ...vegetables, ...foods, ...meats, ...pharmacies].map((product: IProduct) => {
            products.push({
                id: product.id,
                item: <CartImage image={product.image}/>,
                name: product.name,
                category: "Vegetable",
                date: "11 july 2021",
                unitPrice: <UnitPrice price={product.currentPrice}/>,
                action: <ProductAction id={product.id}/>
            })
        })
    } else {
        categories.map((category: ISelectOption) => {
            if (category.value === "Electronic") {
                electronics.map((product: IProduct) => {
                    products.push({
                        id: product.id,
                        item: <CartImage image={product.image}/>,
                        name: product.name,
                        category: "Electronic",
                        date: "11 july 2021",
                        unitPrice: <UnitPrice price={product.currentPrice}/>,
                        action: <ProductAction id={product.id}/>
                    })
                })
            }
            if (category.value === "Food") {
                foods.map((product: IProduct) => {
                    products.push({
                        id: product.id,
                        item: <CartImage image={product.image}/>,
                        name: product.name,
                        category: "Food",
                        date: "11 july 2021",
                        unitPrice: <UnitPrice price={product.currentPrice}/>,
                        action: <ProductAction id={product.id}/>
                    })
                })
            }
            if (category.value === "Fruit") {
                fruits.map((product: IProduct) => {
                    products.push({
                        id: product.id,
                        item: <CartImage image={product.image}/>,
                        name: product.name,
                        category: "Fruit",
                        date: "11 july 2021",
                        unitPrice: <UnitPrice price={product.currentPrice}/>,
                        action: <ProductAction id={product.id}/>
                    })
                })
            }
            if (category.value === "Meat") {
                meats.map((product: IProduct) => {
                    products.push({
                        id: product.id,
                        item: <CartImage image={product.image}/>,
                        name: product.name,
                        category: "Meat",
                        date: "11 july 2021",
                        unitPrice: <UnitPrice price={product.currentPrice}/>,
                        action: <ProductAction id={product.id}/>
                    })
                })
            }
            if (category.value === "Pharmacy") {
                pharmacies.map((product: IProduct) => {
                    products.push({
                        id: product.id,
                        item: <CartImage image={product.image}/>,
                        name: product.name,
                        category: "Pharmacy",
                        date: "11 july 2021",
                        unitPrice: <UnitPrice price={product.currentPrice}/>,
                        action: <ProductAction id={product.id}/>
                    })
                })
            }
            if (category.value === "Vegetable") {
                vegetables.map((product: IProduct) => {
                    products.push({
                        id: product.id,
                        item: <CartImage image={product.image}/>,
                        name: product.name,
                        category: "Vegetable",
                        date: "11 july 2021",
                        unitPrice: <UnitPrice price={product.currentPrice}/>,
                        action: <ProductAction id={product.id}/>
                    })
                })
            }
        })
    }


    const columns = [
        {dataField: 'id', text: '#'},
        {dataField: 'item', text: 'Item'},
        {dataField: 'name', text: 'Product Name', sort: true, filter: textFilter()},
        {dataField: 'category', text: 'Category'},
        {dataField: 'date', text: 'Date'},
        {dataField: 'unitPrice', text: 'UnitPrice'},
        {dataField: 'action', text: 'Action'}
    ];

    const customTotal = (from: number, to: number, size: number) => (
        <span className="react-bootstrap-table-pagination-total text-secondary">
            Showing {from} to {to} of {size} Results
        </span>
    );

    const options: PaginationOptions = {
        paginationSize: 4,
        pageStartIndex: 1,
        firstPageText: 'First',
        prePageText: 'Back',
        nextPageText: 'Next',
        lastPageText: 'Last',
        nextPageTitle: 'First page',
        prePageTitle: 'Pre page',
        firstPageTitle: 'Next page',
        lastPageTitle: 'Last page',
        showTotal: true,
        paginationTotalRenderer: customTotal,
        sizePerPageList: [{
            text: '5', value: 5
        }, {
            text: '10', value: 10
        }, {
            text: 'All', value: products.length
        }]
    };


    return (
        <BootstrapTable
            bootstrap4
            keyField='id'
            data={products}
            columns={columns}
            // noDataIndication={noDataIndicator}
            wrapperClasses='table-responsive overflow-x'
            classes='custom-table item-table'
            rowClasses='text-wrap'
            headerClasses='header-class'
            pagination={paginationFactory(options)}
            defaultSortDirection="asc"
            filter={filterFactory()}
        />
    )
}

export default AllProducts;