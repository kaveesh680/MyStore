import React from "react";
import {Button, Col, Row} from "react-bootstrap";

const LogInBtn: React.FC = () => {
    return (
        <Row className='text-center my-3'>
            <Col xs={12}>
                <Button variant="primary" type='submit'>Log In</Button>
            </Col>
        </Row>
    )
}

export default LogInBtn;