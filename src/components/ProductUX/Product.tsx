import React from "react";
import {Col, Image, Row} from "react-bootstrap";
import {IProduct} from "../../types/types";
import Name from "./Name";
import CurrentPrice from "./CurrentPrice";
import OldPrice from "./OldPrice";
import AddToCartBtn from "./AddToCartBtn";
import Quantity from "./Quantity";

type ProductProps = {
    productDetails: IProduct
    index: number
}

const Product: React.FC<ProductProps> = (props) => {

    const {name, image, oldPrice, currentPrice, id} = props.productDetails.product;
    const {inCart} = props.productDetails;

    return (
        <Col md={4} lg={3} xs={6} className='px-md-2 mb-3 px-1'>
            <div className='product px-3 py-4'>
                <Row className='justify-content-center'>
                    <Col xs="auto">
                        {/*<Image src={image} placeholder="carrot" fluid={true}/>*/}
                        <Image src={image} fluid={true} placeholder={`${image}`}/>
                    </Col>
                </Row>
                <Name name={name}/>
                <Row className='justify-content-center'>
                    <CurrentPrice currentPrice={currentPrice}/>
                    {oldPrice && <OldPrice oldPrice={oldPrice}/>}
                </Row>
                <Row>
                    <Quantity/>
                    <AddToCartBtn inCart={inCart}/>
                </Row>
            </div>
        </Col>
    )
}

export default Product;