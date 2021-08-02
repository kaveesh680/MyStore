import React from 'react'
import {Button, Col, Container, Image, Row} from "react-bootstrap";
import BannerImg from '../../assets/images/welcome/welcome_banner.webp';

const Welcome: React.FC = () => {
    return (
        <Container fluid={true} className='px-0'>
            <Row className="welcome">
                <Col xs={12}>
                    <Image src={BannerImg} fluid={true} alt='Banner'/>
                </Col>
                <Col xs={{span: 7, offset: 5}} md={{span: 6, offset: 6}} className="banner-text">
                    <span className="regular">100% Healthy & Affordable</span><br/>
                    <span className="organic">Organic Vegetables</span><br/>
                    <span className="regular">Small Changes Big Difference</span><br/>
                    <Button className="shop-now">Shop Now</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default Welcome;