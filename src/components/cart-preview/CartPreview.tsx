import React, {useRef, useState} from "react";
import {Col, Container, Overlay, Popover, Row} from "react-bootstrap";
import EmptyCartPreview from "./EmptyCartPreview";
import {ICheckoutProduct, IProduct} from "../../types/types";
import CheckOutBtn from "../common/CheckOutBtn";
import CartPreviewDetails from "./CartPreviewDetails";
import CartItem from "./CartItem";
import CartIcon from "./CartIcon";
import {AllProducts} from "../../constants/AllProducts";
import {useSelector} from "react-redux";
import {RootState} from "../../store/reducers/RootReducer";


const CartPreview: React.FC = () => {
    const [displayCart, setDisplayCart] = useState<boolean>(false);
    const [target, setTarget] = useState(null);
    const checkoutProducts: ICheckoutProduct[] = useSelector((state: RootState) => state.cartReducer.productsInCart);
    const ref = useRef(null);
    let subTotal = 0;

    const handleClick = (event: any) => {
        setDisplayCart(!displayCart)
        setTarget(event.target);
    };
    const cartRows: any = [];
    AllProducts.map((product: IProduct) => {
        checkoutProducts.map((checkoutProduct: ICheckoutProduct, index: number) => {
            if (checkoutProduct.id === product.id) {
                if (checkoutProduct.quantity) {
                    subTotal += checkoutProduct.quantity * product.currentPrice;
                    cartRows.push(<CartItem
                        key={index}
                        product={product}
                        quantity={checkoutProduct.quantity}
                        index={index}/>)
                }
            }
        })
    });

    return (
        <div ref={ref}>
            <CartIcon handleClick={handleClick} itemCount={checkoutProducts.length}/>
            <Overlay
                show={displayCart}
                target={target}
                placement="bottom-end"
                container={ref.current}
                rootClose={true}
                rootCloseEvent='mousedown'
            >
                <Popover id="popover-contained" className={checkoutProducts.length === 0 ?
                    `empty-cart-popover mt-2 mt-md-3 py-2 px-3` : `cart-preview-popover mt-2 mt-md-3 py-2`}>
                    <Container className="cart-preview-container px-2">
                        <Row className="cart-preview m-0 p-0">
                            {checkoutProducts.length === 0 ? <EmptyCartPreview/> :
                                <React.Fragment>
                                    <Col xs={12} className="item-table">
                                        {cartRows.map((item: any) => {
                                            return item;
                                        })}
                                    </Col>
                                    <Col xs={12} className="pr-4">
                                        <CartPreviewDetails subTotal={subTotal} count={checkoutProducts.length}/>
                                    </Col>
                                    <Col xs={12}>
                                        <CheckOutBtn
                                            classname={"cart-checkout-btn px-5 py-2 mb-2 d-block d-sm-none float-right"}/>
                                    </Col>
                                </React.Fragment>}
                        </Row>
                    </Container>
                </Popover>
            </Overlay>
            <CheckOutBtn classname='ml-4 d-none d-md-inline'/>
        </div>
    );
}

export default CartPreview;
