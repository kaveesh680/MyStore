import React from "react";
import {Button, Col, Row} from "react-bootstrap";

type LogInProps = {
    text: string
    checkValue: boolean
}

const LogInBtn: React.FC<LogInProps> = (props) => {

    const {text, checkValue} = props;

    return (
        <Row className='text-center my-3'>
            <Col xs={12}>
                <Button variant="primary" type='submit' disabled={!checkValue}>{text}</Button>
            </Col>
        </Row>
    )
}

export default LogInBtn;