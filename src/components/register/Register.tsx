import React from "react";
import {Container, Row} from "react-bootstrap";
import ImgArea from "../login/ImgArea";
import RegisterCart from '../../assets/images/register/registerCart.png';
import RegisterForm from "./RegisterForm";

const Register: React.FC = () => {
    return (
        <Container className='pt-5 register px-lg-5'>
            <Row>
                <ImgArea img={RegisterCart} classname="mt-md-5 pt-md-5"/>
                <RegisterForm/>
            </Row>
        </Container>
    )
}

export default Register;