import React, {useRef, useState} from "react";
import {Col, Container, Overlay, Popover, Row} from "react-bootstrap";
import EmptyCartPreview from "./EmptyCartPreview";
import {ICheckoutProduct} from "../../types/types";
import CabbageImg from '../../assets/images/groceryImages/cabbage.png';
import CarrotImg from '../../assets/images/groceryImages/carrot.png';
import EggplantImg from '../../assets/images/groceryImages/eggplant.png';
import GarlicImg from '../../assets/images/groceryImages/garlic.png';
import LeaksImg from '../../assets/images/groceryImages/garlic.png';
import OnionImg from '../../assets/images/groceryImages/onion.png';
import PotatoImg from '../../assets/images/groceryImages/potato.png';
import CheckOutBtn from "../common/CheckOutBtn";
import CartPreviewDetails from "./CartPreviewDetails";
import CartItem from "./CartItem";
import CartIcon from "./CartIcon";


const CartPreview: React.FC = () => {
    const [displayCart, setDisplayCart] = useState<boolean>(false);
    const [target, setTarget] = useState(null);
    const ref = useRef(null);
    let subTotal = 0;

    const handleClick = (event: any) => {
        setDisplayCart(!displayCart)
        setTarget(event.target);
    };

    const cartItems: ICheckoutProduct[] = [
        {quantity: 4, product: {id: "fdfdf32323", name: "Cabbage", image: CabbageImg, currentPrice: 35, oldPrice: 45}},
        {quantity: 5, product: {id: "fdfdf323d3", name: "Carrot", image: CarrotImg, currentPrice: 30, oldPrice: 45}},
        {quantity: 2, product: {id: "fdfdf323s", name: "Eggplant", image: EggplantImg, currentPrice: 35, oldPrice: 45}},
        {quantity: 1, product: {id: "fdfdf323f3", name: "Garlic", image: GarlicImg, currentPrice: 35, oldPrice: 45}},
        {quantity: 6, product: {id: "fdfdf323w3", name: "Leaks", image: LeaksImg, currentPrice: 35, oldPrice: 45}},
        {quantity: 8, product: {id: "fdfdf323t3", name: "Onion", image: OnionImg, currentPrice: 30, oldPrice: 45}},
        {quantity: 3, product: {id: "fdfdf323u3", name: "Potato", image: PotatoImg, currentPrice: 35, oldPrice: 45}}
    ];

    return (
        <div ref={ref}>
            <CartIcon handleClick={handleClick} itemCount={cartItems.length}/>
            <Overlay
                show={displayCart}
                target={target}
                placement="bottom-end"
                container={ref.current}
                rootClose={true}
                rootCloseEvent='mousedown'
            >
                <Popover id="popover-contained" className={cartItems.length === 0 ?
                    `empty-cart-popover mt-2 mt-md-3 py-2 px-3` : `cart-preview-popover mt-2 mt-md-3 py-2`}>
                    <Container className="cart-preview-container px-2">
                        <Row className="cart-preview m-0 p-0">
                            {cartItems.length === 0 ? <EmptyCartPreview/> :
                                <React.Fragment>
                                    <Col xs={12} className="item-table">
                                        {cartItems.map((item: ICheckoutProduct, index: number) => {
                                            if (item.quantity) {
                                                subTotal += item.quantity * item.product.currentPrice;
                                                return (
                                                    <CartItem
                                                        key={index}
                                                        product={item.product}
                                                        quantity={item.quantity}
                                                        index={index}/>
                                                );
                                            }
                                        })
                                        }
                                    </Col>
                                    <Col xs={12} className="pr-4">
                                        <CartPreviewDetails subTotal={subTotal} count={cartItems.length}/>
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
