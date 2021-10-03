import React from "react";
import {Button, Modal} from "react-bootstrap";
import {IOrder, IOrderProduct} from "../../../types/types";
import UnitPrice from "../../cart-table/UnitPrice";

type OrderProps = {
    show: boolean
    handleClose: () => void
    order: IOrder
}

const Order: React.FC<OrderProps> = (props) => {
    const {show, handleClose, order} = props;
    const renderProducts = () => {
        if (order) {
            return order.order_items.map((product: IOrderProduct, index: number) =>
                <p key={product.product._id}>{`${index+1}. ${product.product.name}-${product.quantity}`}</p>
            )
        }
    }

    return (
        <React.Fragment>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Order Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <div>
                            <p>{`Order ID : ${order._id}`}</p>
                            <p>{`User ID : ${order.user_id}`}</p>
                            <p>{`Date : ${order.date}`}</p>
                            <p>{`Payment Method : ${order.payment_method}`}</p>
                            {renderProducts()}
                            <p>Discount : <UnitPrice price={order.discount}/></p>
                            <p>Sub Total : <UnitPrice price={order.sub_total}/></p>
                            <h5>Delivery Details</h5>
                        </div>
                        <div className='pl-4'>
                            <p>{order.delivery.full_name}</p>
                            <p>{order.delivery.address}</p>
                            <p>{order.delivery.city}</p>
                            <p>{order.delivery.postal_code}</p>
                            <p>{order.delivery.country}</p>
                            <p>{order.delivery.email}</p>
                            <p>{order.delivery.contact_number}</p>

                        </div>
                        <h5>Shipping Details</h5>
                        <div className='pl-4'>
                            <p>{order.shipping.name}</p>
                            <p>{order.shipping.billing_address}</p>
                            <p>{order.shipping.country}</p>
                            <p>{order.shipping.city}</p>
                            <p>{order.shipping.postal_code}</p>
                            <p>{order.shipping.contact_number}</p>
                        </div>
                    </div>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Complete
                    </Button>
                </Modal.Footer>
            </Modal>
        </React.Fragment>
    )
}

export default Order;