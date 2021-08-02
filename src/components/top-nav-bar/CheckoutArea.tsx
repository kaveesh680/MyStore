import React from "react";
import {Badge, Col} from "react-bootstrap";
import {FiShoppingCart} from "react-icons/all";
import CheckOutBtn from "../common/CheckOutBtn";

const CheckoutArea: React.FC = () => {
    return (
        <React.Fragment>
            <Col xs={8} className='text-right checkoutArea pt-3 pr-4'>
                <Badge className="count-badge mr-3 float-right">4</Badge>
                <FiShoppingCart size={40} color='#0abd48'/>
                <CheckOutBtn classname='ml-4 d-none d-md-inline'/>
            </Col>
        </React.Fragment>
    )
}

export default CheckoutArea;