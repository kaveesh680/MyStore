import React from "react";
import {FiMinusCircle, FiPlusCircle} from "react-icons/all";
import {useDispatch} from "react-redux";
import {changeQuantity} from "../../store/actions/CartActions";

type QuantityToggleProps = {
    quantity: number
    index: number
    id: string
}

const QuantityToggle: React.FC<QuantityToggleProps> = (props) => {
    const {index, quantity, id} = props;
    const dispatch = useDispatch();

    const handleOnClick = (change: number) => {
        if (change < 0 && quantity === 1) {
            return
        }
        dispatch(changeQuantity(id, change));
    }

    return (
        <React.Fragment>
            <FiMinusCircle className="quantity-toggle text-danger" onClick={() => handleOnClick(-1)}/>
            {quantity}
            <FiPlusCircle className="quantity-toggle text-primary" onClick={() => handleOnClick(+1)}/>
        </React.Fragment>
    );
}

export default QuantityToggle;
