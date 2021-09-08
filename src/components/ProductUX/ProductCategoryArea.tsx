import React from 'react';
import {Row} from "react-bootstrap";
import {IProduct} from "../../types/types";
import CategoryTitle from "./CategoryTitle";
import Product from "./Product";

type ProductCategoryAreaProps = {
    products: IProduct[],
    category: string
}

const ProductCategoryArea: React.FC<ProductCategoryAreaProps> = (props) => {

    const {products, category} = props;

    return (
        <React.Fragment>
            <CategoryTitle category={category}/>
            <Row>
                {products.map((product: IProduct, index: number) =>
                    <Product productDetails={product} key={index} index={index}/>
                )}
            </Row>
        </React.Fragment>
    )
}

export default ProductCategoryArea;
