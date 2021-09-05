import React from "react";
import {Col, Row} from "react-bootstrap";
import {BiMinusCircle, BiPlusCircle} from "react-icons/all";

type QuantityProps = {
    quantity: number
    index: number
}

const Quantity: React.FC<QuantityProps> = (props) => {
    const {quantity, index} = props;

    const handleOnClick = (change: number) => {
        if (change < 0 && quantity === 1) {
            return
        }
    }

    return (
        <Row>
            <Col className='quantity-editor' xs={12}>
                <BiMinusCircle size={18} onClick={() => handleOnClick(-1)}/>
                <label className='px-2 mb-0'>{quantity}</label>
                <BiPlusCircle size={18} onClick={() => handleOnClick(+1)}/>
            </Col>
        </Row>
    )
}

export default Quantity;
