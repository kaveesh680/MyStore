import React from "react";
import {Col, Image, Row} from "react-bootstrap";
import DeleteIcon from "../common/DeleteIcon";
import QuantityToggle from "../common/QuantityToggle";
import {IProduct} from "../../types/types";

type CartItemProps = {
    product: IProduct
    quantity: number
    index: number
}

const CartItem: React.FC<CartItemProps> = (props) => {
    const {product, quantity, index} = props;

    return (
        <Row className="cart-item border-bottom mt-3 pb-2 mx-0">
            <Col xs={4} className="p-0 text-center">
                <Image src={product.image} fluid={true} className="cart-item-image"/>
            </Col>
            <Col xs={5} md={4} className="pl-2 pl-md-4 pr-0">
                <label className="cart-item-name mb-3">{product.name}</label><br/>
                <label className="cart-item-qty">Qty: <QuantityToggle quantity={quantity} index={index}
                                                                      id={product.id}/></label>
            </Col>
            <Col xs={3} md={4} className="text-right px-0 pr-md-2">
                <label className="mb-3">
                    <DeleteIcon size={15} color={"#3c6382"} id={product.id}/>
                </label>
                <br/>
                <label className="cart-item-subtotal">
                    {`Rs. ${product.currentPrice * quantity}`}<small className="subtotal-cents">.00</small>
                </label>
            </Col>
        </Row>
    );
}

export default CartItem;
