import React from "react";
import BootstrapTable, {PaginationOptions} from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import Quantity from "./Quantity";
import DeleteIcon from "../common/DeleteIcon";
import CartImage from "./CartImage";
import UnitPrice from "./UnitPrice";
import {ICheckoutProduct, IProduct} from "../../types/types";
import EmptyCartPreview from "../cart-preview/EmptyCartPreview";
import {AllProducts} from "../../constants/AllProducts";
import {useSelector} from "react-redux";
import {RootState} from "../../store/reducers/RootReducer";

type CartTableProps = {
    onGetTotal: (total: number) => void
}

const CartTable: React.FC<CartTableProps> = (props) => {
    const {onGetTotal} = props;
    const checkoutProducts: ICheckoutProduct[] = useSelector((state: RootState) => state.cartReducer.productsInCart);

    let total: number = 0;
    let index: number = 0;
    const products: any = [];
    AllProducts.map((product: IProduct) => {
        checkoutProducts.map((checkoutProduct: ICheckoutProduct) => {
            if (checkoutProduct.id === product.id) {
                index += 1;
                if (checkoutProduct.quantity) {
                    total += product.currentPrice * checkoutProduct.quantity;
                    products.push({
                        id: index,
                        item: <CartImage image={product.image}/>,
                        name: product.name,
                        qty: <Quantity quantity={checkoutProduct.quantity} index={index} id={product.id}/>,
                        unitPrice: <UnitPrice price={product.currentPrice}/>,
                        amount: <UnitPrice price={product.currentPrice * checkoutProduct.quantity}/>,
                        deleteIcon: <DeleteIcon size={15} color="black" id={product.id}/>
                    })
                }
            }
        })
    });

    onGetTotal(total);

    const noDataIndicator = () => {
        return <EmptyCartPreview/>
    }

    const columns = [
        {dataField: 'id', text: '#'},
        {dataField: 'item', text: 'Item'},
        {dataField: 'name', text: 'Name', sort: true},
        {dataField: 'qty', text: 'Qty'},
        {dataField: 'unitPrice', text: 'UnitPrice'},
        {dataField: 'amount', text: 'Amount'},
        {dataField: 'deleteIcon', text: ''}
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
            noDataIndication={noDataIndicator}
            wrapperClasses='table-responsive overflow-x'
            classes='custom-table item-table'
            rowClasses='text-wrap'
            headerClasses='header-class'
            pagination={paginationFactory(options)}
            defaultSortDirection="asc"
        />
    )
}

export default CartTable;
