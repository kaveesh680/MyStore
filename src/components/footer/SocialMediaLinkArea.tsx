import React from "react";
import {Col, Row} from "react-bootstrap";
import {FiFacebook, FiInstagram, FiTwitter} from "react-icons/all";

const SocialMediaLinkArea: React.FC = () => {
    return (
        <Row className='text-center pt-3 pb-5 mr-0'>
            <Col xs={12} className='pr-0'>
                <FiFacebook size={20}/>
                <FiTwitter size={20} className='mx-2'/>
                <FiInstagram size={20}/>
            </Col>
        </Row>
    )
}

export default SocialMediaLinkArea