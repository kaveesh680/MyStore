import React from "react";
import {FiMinusCircle, FiPlusCircle} from "react-icons/all";

type QuantityToggleProps = {
    quantity: number
    index: number
}

const QuantityToggle: React.FC<QuantityToggleProps> = (props) => {
    const {index, quantity} = props;

    const handleOnClick = (change: number) => {
        if (change < 0 && quantity === 1) {
            return
        }
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
