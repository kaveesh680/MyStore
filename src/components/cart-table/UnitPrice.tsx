import React from "react";
import NumberFormat from "react-number-format";

type UnitPriceProps = {
    price: number
}

const UnitPrice: React.FC<UnitPriceProps> = (props) => {

    const {price} = props;

    return (
        <label className='mb-0'>
            <NumberFormat value={price}
                          thousandSeparator={true}
                          displayType='text'
                          prefix={'Rs. '}
                          decimalScale={2}
                          fixedDecimalScale={true}/>
        </label>
    )
}

export default UnitPrice;
