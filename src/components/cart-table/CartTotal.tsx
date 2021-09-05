import React from "react";
import CouponArea from "./CouponArea";
import {Col, Row} from "react-bootstrap";
import UnitPrice from "./UnitPrice";

type CartTotalProps = {
    total:number
}

const CartTotal: React.FC<CartTotalProps> = (props) => {

    const {total} = props;

    return (
        <React.Fragment>
            <CouponArea/>
            <Row className='border-bottom mx-0'>
                <Col xs={6} className='mt-3 px-0'>
                    <h6>Delivery Charge</h6>
                </Col>
                <Col xs={6} className='mt-3 px-0'>
                    <h6 className='float-right'><UnitPrice price={0}/></h6>
                </Col>
            </Row>
            <Row className='border-top mx-0'>
                <Col xs={6} className='mt-2 px-0'>
                    <h6>Total</h6>
                </Col>
                <Col xs={6} className='mt-2 px-0'>
                    <h6 className='float-right text-danger total'><UnitPrice price={total}/></h6>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default CartTotal;