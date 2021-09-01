import React from "react";
import {Col, Row} from "react-bootstrap";
import SoftVesselLogo from "./SoftVesselLogo";

const FooterDetailsArea: React.FC = () => {
    return (
        <Row className='footer-details-area pt-4 mr-0'>
            <Col xs={12} className='pr-0'>
                <SoftVesselLogo/>
                <Row className='text-center pt-2 mr-0'>
                    <Col xs={12} className='pr-0'>
                        <span>SoftVessel (Pvt) Ltd.</span><br/>
                        <span>60 Cotta Road, Colombo 8,</span><br/>
                        <span>Sri Lanka</span><br/>
                        <span>+94 779 510 260</span><br/>
                        <span>+94 112 680 360</span><br/>
                        <span>Copyright © 2020</span>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default FooterDetailsArea;