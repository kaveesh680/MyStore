import React from "react";
import {Col} from "react-bootstrap";
import CartPreview from "../cart-preview/CartPreview";

const CheckoutArea: React.FC = () => {
    return (
        <React.Fragment>
            <Col xs={8} className='text-right checkoutArea pt-3 pr-4'>
                <CartPreview/>
            </Col>
        </React.Fragment>
    )
}

export default CheckoutArea;