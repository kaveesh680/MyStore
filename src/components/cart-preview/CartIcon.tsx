import React from "react";
import {Badge} from "react-bootstrap";
import {FiShoppingCart} from "react-icons/all";

type CartIconProps = {
    handleClick: (event: any) => void
    itemCount: number
}

const CartIcon: React.FC<CartIconProps> = (props) => {

    const {handleClick, itemCount} = props;

    return (
        <React.Fragment>
            <Badge className="count-badge mr-3 float-right">{itemCount}</Badge>
            <FiShoppingCart size={40} color='#0abd48' onClick={handleClick}/>
        </React.Fragment>
    )
}

export default CartIcon;