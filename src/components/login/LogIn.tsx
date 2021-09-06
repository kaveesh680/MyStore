import React from "react";
import {Container, Row} from "react-bootstrap";
import ImgArea from "./ImgArea";
import FormArea from "./FormArea";

const LogIn: React.FC = () => {
    return (
        <Container className='pt-5 login px-5'>
            <Row>
                <ImgArea/>
                <FormArea/>
            </Row>
        </Container>
    )
}

export default LogIn;