import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {IProducts} from "../../types/types";
import ProductCategoryArea from "./ProductCategoryArea";

type ProductsProps = {
    products: IProducts[]
}

const Products: React.FC<ProductsProps> = (props) => {

    const {products} = props;

    return (
        <Container>
            <Row className='products justify-content-center'>
                <Col xs={12}>
                    {products.map((shopProducts: IProducts, index: number) =>
                        <ProductCategoryArea products={shopProducts.productDetails} key={index}
                                             category={shopProducts.category}/>
                    )}
                </Col>
            </Row>
        </Container>
    )
}

export default Products;
