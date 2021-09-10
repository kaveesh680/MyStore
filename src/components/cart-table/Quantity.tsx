import React from "react";
import {Col, Row} from "react-bootstrap";
import {BiMinusCircle, BiPlusCircle} from "react-icons/all";
import {useDispatch} from "react-redux";
import {changeQuantity} from "../../store/actions/CartActions";

type QuantityProps = {
    quantity: number
    index: number
    id: string
}

const Quantity: React.FC<QuantityProps> = (props) => {
    const {quantity, index, id} = props;
    const dispatch = useDispatch();

    const handleOnClick = (change: number) => {
        if (change < 0 && quantity === 1) {
            return
        }
        dispatch(changeQuantity(id, change));
    }

    return (
        <Row>
            <Col className='quantity-editor' xs={12}>
                <BiMinusCircle size={18} onClick={() => handleOnClick(-1)}/>
                <label className='px-2 mb-0'>{quantity}</label>
                <BiPlusCircle size={18} onClick={() => handleOnClick(+1)}/>
            </Col>
        </Row>
    )
}

export default Quantity;
