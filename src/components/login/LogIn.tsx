import React from "react";
import {Container, Row} from "react-bootstrap";
import ImgArea from "./ImgArea";
import FormArea from "./FormArea";
import LogInCart from "../../assets/images/login/logInCart.png";

const LogIn: React.FC = () => {
    return (
        <Container className='pt-5 login px-lg-5'>
            <Row>
                <ImgArea img={LogInCart} classname=""/>
                <FormArea/>
            </Row>
        </Container>
    )
}

export default LogIn;