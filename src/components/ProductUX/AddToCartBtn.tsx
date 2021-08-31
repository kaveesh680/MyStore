import React from "react";
import {Button, Col} from "react-bootstrap";

type AddToCatBtnProps = {
    inCart: boolean
}

const AddToCartBtn: React.FC<AddToCatBtnProps> = (props) => {

    const {inCart} = props;

    return (
        <Col xs={12} md={6} className='pl-md-2 pl-3  text-center'>
            <Button variant={inCart ? "outline-secondary" : "success"}
                    className='float-md-right px-md-1 px-3 addToCartBtn'>{inCart ? "Update" : "Add To Cart"}</Button>
        </Col>
    )
}

export default AddToCartBtn;