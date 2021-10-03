import React from "react";
import {IOrder, ISelectOption} from "../../../types/types";
import BootstrapTable, {PaginationOptions} from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import filterFactory from "react-bootstrap-table2-filter";
import {ValueType} from "react-select/src/types";
import Status from "./Status";
import Edit from "./Edit";

type OrdersProps = {
    categories: ValueType<ISelectOption, true>
}

const Orders: React.FC<OrdersProps> = (props) => {

    const {categories} = props;

    const orders: IOrder[] = [{
        _id: "dfdfdfdfdf34343",
        user_id: "dsdsdsdsdsdsd",
        order_items: [
            {
                product: {
                    _id: "350f84db-be84-4e8a-aa9c-4549b78f7de3",
                    name: "Carrot",
                    image: "carrot",
                    current_price: 55,
                    old_price: null,
                    key: "123456789"
                },
                quantity: 3
            }, {
                product: {
                    _id: "b851a188-acd3-422c-9992-c8cb18a9afe8",
                    name: "Cabbage",
                    image: "cabbage",
                    current_price: 35,
                    old_price: 40,
                    key: "912345678"
                },
                quantity: 5
            }
        ],
        date: "July 05",
        discount: 20,
        sub_total: 200,
        payment_method: "cash",
        status: false,
        instruction: "Nothing",
        delivery: {
            address: "No 23 A.H.E.Fernando Mawatha, Dangedara, Galle",
            full_name: "kaveesh charuka",
            city: "Galle",
            country: "Sri Lanka",
            postal_code: 80000,
            email: "kaveeshcharuka@gmail.com",
            contact_number: "+94713381609"
        },
        shipping: {
            billing_address: "fgfgfdgf",
            name: "kaveesh",
            city: "Galle",
            country: "Sri Lanka",
            postal_code: 80000,
            contact_number: "+9713381609"
        }

    },{
        _id: "dfdfdfdfdf34343",
        user_id: "dsdsdsdsdsdsd",
        order_items: [
            {
                product: {
                    _id: "350f84db-be84-4e8a-aa9c-4549b78f7de3",
                    name: "Carrot",
                    image: "carrot",
                    current_price: 55,
                    old_price: null,
                    key: "123456789"
                },
                quantity: 3
            }, {
                product: {
                    _id: "b851a188-acd3-422c-9992-c8cb18a9afe8",
                    name: "Cabbage",
                    image: "cabbage",
                    current_price: 35,
                    old_price: 40,
                    key: "912345678"
                },
                quantity: 5
            }
        ],
        date: "July 05",
        discount: 20,
        sub_total: 200,
        payment_method: "cash",
        status: false,
        instruction: "Nothing",
        delivery: {
            address: "No 23 A.H.E.Fernando Mawatha, Dangedara, Galle",
            full_name: "kaveesh charuka",
            city: "Galle",
            country: "Sri Lanka",
            postal_code: 80000,
            email: "kaveeshcharuka@gmail.com",
            contact_number: "+94713381609"
        },
        shipping: {
            billing_address: "fgfgfdgf",
            name: "kaveesh",
            city: "Galle",
            country: "Sri Lanka",
            postal_code: 80000,
            contact_number: "+9713381609"
        }

    },{
        _id: "dfdfdfdfdf34343",
        user_id: "dsdsdsdsdsdsd",
        order_items: [
            {
                product: {
                    _id: "350f84db-be84-4e8a-aa9c-4549b78f7de3",
                    name: "Carrot",
                    image: "carrot",
                    current_price: 55,
                    old_price: null,
                    key: "123456789"
                },
                quantity: 3
            }, {
                product: {
                    _id: "b851a188-acd3-422c-9992-c8cb18a9afe8",
                    name: "Cabbage",
                    image: "cabbage",
                    current_price: 35,
                    old_price: 40,
                    key: "912345678"
                },
                quantity: 5
            }
        ],
        date: "July 05",
        discount: 20,
        sub_total: 200,
        payment_method: "cash",
        status: true,
        instruction: "Nothing",
        delivery: {
            address: "No 23 A.H.E.Fernando Mawatha, Dangedara, Galle",
            full_name: "kaveesh charuka",
            city: "Galle",
            country: "Sri Lanka",
            postal_code: 80000,
            email: "kaveeshcharuka@gmail.com",
            contact_number: "+94713381609"
        },
        shipping: {
            billing_address: "fgfgfdgf",
            name: "kaveesh",
            city: "Galle",
            country: "Sri Lanka",
            postal_code: 80000,
            contact_number: "+9713381609"
        }

    }];
    const allOrders: any = [];
    orders.map((order: IOrder) => {
        allOrders.push({
            Order_ID: order._id,
            User_ID: order.user_id,
            Date: order.date,
            Status: <Status status={order.status}/>,
            action: <Edit order={order}/>
        })
    });

    const columns = [
        {dataField: 'Order_ID', text: '#'},
        {dataField: 'User_ID', text: 'User_ID'},
        {dataField: 'Date', text: 'Date'},
        {dataField: 'Status', text: 'Products'},
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
            text: 'All', value: allOrders.length
        }]
    };

    return (
        <BootstrapTable
            bootstrap4
            keyField='id'
            data={allOrders}
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

export default Orders;