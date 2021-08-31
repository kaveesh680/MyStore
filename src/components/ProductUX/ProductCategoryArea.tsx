import React from 'react';
import {Row} from "react-bootstrap";
import {IProduct, IProducts} from "../../types/types";
import CategoryTitle from "./CategoryTitle";
import Product from "./Product";

type ProductCategoryAreaProps = {
    products: IProducts
}

const ProductCategoryArea: React.FC<ProductCategoryAreaProps> = (props) => {
    return (
        <React.Fragment>
            <CategoryTitle category={props.products.category}/>
            <Row>
                {props.products.productDetails.map((product: IProduct, index: number) =>
                    <Product productDetails={product} key={index} index={index}/>
                )}
            </Row>
        </React.Fragment>
    )
}

export default ProductCategoryArea;
