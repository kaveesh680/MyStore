import React from "react";
import {Col} from "react-bootstrap";

type CheckoutHeaderProps = {
    header:string
}

const CheckoutHeader:React.FC<CheckoutHeaderProps> = (props) => {
    const {header} = props;

    return(
        <Col md={8} xl={10} lg={9} sm={6} className='px-0 pt-2 checkOut-label text-md-left text-center pb-3 pb-md-0'>
            <h4 className='mb-0'>{header}</h4>
        </Col>
    )
}

export default CheckoutHeader;