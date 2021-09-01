import React from "react";
import {Col, ListGroup, Row} from "react-bootstrap";
import FooterLink from "./FooterLink";

const FooterLinArea: React.FC = () => {
    return (
        <Row className='footer-link-area mr-0'>
            <Col xs={12} className='pr-0'>
                <ListGroup horizontal={"sm"} className='justify-content-center'>
                    <FooterLink name={"HOME"}/>
                    <FooterLink name={"ABOUT US"}/>
                    <FooterLink name={"FAQ"}/>
                    <FooterLink name={"PRICING"}/>
                    <FooterLink name={"CONTACT US"}/>
                </ListGroup>
            </Col>
        </Row>
    )
}

export default FooterLinArea;