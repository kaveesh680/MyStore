import React, {useState} from "react";
import {Col, Nav, Navbar, Row} from "react-bootstrap";
import HeaderNavLink from "./HeaderNavLink";
import BtnArea from "./BtnArea";
import DarkModeToggle from "react-dark-mode-toggle";

const HeaderNavBar: React.FC = () => {

    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

    return (
        <Row>
            <Col xs={12} className='px-0 border'>
                <Navbar expand="md" className='py-0 float-md-right'>
                    <HeaderNavLink icon='phone' detail='+94 713 381 609'/>
                    <DarkModeToggle
                        size={50}
                        className='mr-1 nightModeBtn pt-2 d-md-none'
                        onChange={setIsDarkMode}
                        checked={isDarkMode}
                    />
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <HeaderNavLink icon='truck' detail='Delivery Areas'/>
                            <HeaderNavLink icon='user' detail='My Account'/>
                            <DarkModeToggle
                                size={65}
                                className='mr-3 nightModeBtn pt-1 d-none d-md-inline'
                                onChange={setIsDarkMode}
                                checked={isDarkMode}
                            />
                            <BtnArea/>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Col>
        </Row>

    )
}

export default HeaderNavBar;