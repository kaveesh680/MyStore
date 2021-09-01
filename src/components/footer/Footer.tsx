import React from "react";
import {Container} from "react-bootstrap";
import FooterLinArea from "./FooterLinArea";
import SocialMediaLinkArea from "./SocialMediaLinkArea";
import FooterDetailsArea from "./FooterDetailsArea";

const Footer: React.FC = () => {
    return (
        <Container fluid className='px-0 footer mt-5'>
            <FooterLinArea/>
            <FooterDetailsArea/>
            <SocialMediaLinkArea/>
        </Container>
    )
}

export default Footer;