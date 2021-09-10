import React from 'react';
import {Row} from "react-bootstrap";
import {ICheckoutFilterProduct} from "../../types/types";
import CategoryTitle from "./CategoryTitle";
import Product from "./Product";

type ProductCategoryAreaProps = {
    products: ICheckoutFilterProduct[],
    category: string
    unit:boolean
}

const ProductCategoryArea: React.FC<ProductCategoryAreaProps> = (props) => {

    const {products, category, unit} = props;

    return (
        <React.Fragment>
            <CategoryTitle category={category}/>
            <Row>
                {products.map((product: ICheckoutFilterProduct, index: number) =>
                    <Product product={product} key={index} index={index} inCart={product.inCart}
                              unit={unit}/>
                )}
            </Row>
        </React.Fragment>
    )
}

export default ProductCategoryArea;
