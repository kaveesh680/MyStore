import React from "react";
import {Container} from "react-bootstrap";
import HeaderNavBar from "./HeaderNavBar";
import LogoArea from "./LogoArea";

const TopNavBar: React.FC = () => {
    return (
        <Container fluid={true} className='topNavBar'>
            <HeaderNavBar/>
            <LogoArea/>
        </Container>
    )
}

export default TopNavBar;