import React from 'react';
import {Container, Row} from "react-bootstrap";
import CategoryHeader from "./CategoryHeader";
import Categories from "./Categories";

const CategoryArea: React.FC = () => {

    return (
        <Container fluid={true} className='categoryArea'>
            <CategoryHeader/>
            <Row className='text-center justify-content-center'>
                <Categories/>
            </Row>
        </Container>
    )
}

export default CategoryArea;