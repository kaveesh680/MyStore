import React from "react";
import {Col, Row} from "react-bootstrap";

const CategoryHeader: React.FC = () => {
    return (
        <Row className='my-lg-5 my-3 mt-4 categoryHeader'>
            <Col xs={12} className='text-center'>
                <h2>Our Products</h2>
            </Col>
        </Row>
    )
}

export default CategoryHeader;