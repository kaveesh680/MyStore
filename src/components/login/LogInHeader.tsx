import React from "react";
import {Col, Row} from "react-bootstrap";

const LogInHeader: React.FC = () => {
    return (
        <Row className='mb-4'>
            <Col xs={12}>
                <h3>Log In</h3>
            </Col>
        </Row>
    )
}

export default LogInHeader;