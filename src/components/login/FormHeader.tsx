import React from "react";
import {Col, Row} from "react-bootstrap";

type FormHeaderProps = {
    text: string
}

const FormHeader: React.FC<FormHeaderProps> = (props) => {

    const {text} = props;

    return (
        <Row className='mb-4 text-center'>
            <Col xs={12}>
                <h3>{text}</h3>
            </Col>
        </Row>
    )
}

export default FormHeader;