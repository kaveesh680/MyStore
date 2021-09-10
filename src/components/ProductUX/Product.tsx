import React, {useState} from "react";
import {Col, Image, Row} from "react-bootstrap";
import {ICheckoutFilterProduct, ICheckoutProduct} from "../../types/types";
import Name from "./Name";
import CurrentPrice from "./CurrentPrice";
import OldPrice from "./OldPrice";
import AddToCartBtn from "./AddToCartBtn";
import Quantity from "./Quantity";
import {useDispatch} from "react-redux";
import {addToCart, updateCart} from "../../store/actions/CartActions";

type ProductProps = {
    product: ICheckoutFilterProduct
    index: number
    inCart: boolean
    unit: boolean
}

const Product: React.FC<ProductProps> = (props) => {
    const {product, index, inCart, unit} = props;
    const {name, image, oldPrice, currentPrice, id} = product.product;
    const [productQuantity, setProductQuantity] = useState(product.quantity);
    const dispatch = useDispatch();

    const handleOnUpdateToCart = () => {
        const checkoutProduct: ICheckoutProduct = {
            id: id,
            quantity: productQuantity
        }
        if (inCart) {
            dispatch(updateCart(checkoutProduct));
            return;
        }
        dispatch(addToCart(checkoutProduct));
    }
    return (
        <Col md={4} lg={3} xs={6} className='px-md-2 mb-3 px-1'>
            <div className='product px-3 py-4'>
                <Row className='justify-content-center'>
                    <Col xs="auto">
                        <Image src={image} fluid={true} placeholder={`${image}`}/>
                    </Col>
                </Row>
                <Name name={name}/>
                <Row className='justify-content-center'>
                    <CurrentPrice currentPrice={currentPrice}/>
                    {oldPrice && <OldPrice oldPrice={oldPrice}/>}
                </Row>
                <Row>
                    <Quantity quantity={productQuantity} unit={unit} setQuantity={setProductQuantity} inCart={inCart}
                              id={id}/>
                    <AddToCartBtn inCart={inCart} onUpdateToCart={handleOnUpdateToCart}/>
                </Row>
            </div>
        </Col>
    )
}

export default Product;