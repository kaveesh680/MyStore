import React from "react";
import {Col, Image} from "react-bootstrap";
import LogInCart from "../../assets/images/login/logInCart.png";

const ImgArea: React.FC = () => {
    return (
        <Col xs={12} md={6}>
            <Image src={LogInCart} alt="login"/>
        </Col>
    )
}

export default ImgArea;