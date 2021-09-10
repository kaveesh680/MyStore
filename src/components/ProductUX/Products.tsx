import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {ICheckoutFilterProducts} from "../../types/types";
import ProductCategoryArea from "./ProductCategoryArea";

type ProductsProps = {
    products: ICheckoutFilterProducts[]
}

const Products: React.FC<ProductsProps> = (props) => {

    const {products} = props;

    return (
        <Container>
            <Row className='products justify-content-center'>
                <Col xs={12}>
                    {products.map((shopProducts: ICheckoutFilterProducts, index: number) =>
                        <ProductCategoryArea products={shopProducts.products} key={index}
                                             category={shopProducts.category} unit={shopProducts.unit}/>
                    )}
                </Col>
            </Row>
        </Container>
    )
}

export default Products;
