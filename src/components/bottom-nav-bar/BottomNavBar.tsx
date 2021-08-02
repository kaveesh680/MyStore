import React from "react";
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";

const BottomNavBar: React.FC = () => {
    return (
        <Container fluid={true} className='px-0'>
            <Navbar collapseOnSelect expand="md" className='border bottomNavBar pl-md-5 py-2'>
                <NavDropdown title="Categories" id="collasible-nav-dropdown" className='border '>
                    <NavDropdown.Item href="#action/3.1">All</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Grocery</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Pharmacy</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.1">Food</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Electronic</NavDropdown.Item>
                </NavDropdown>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link className='px-3 pl-md-5'>Home</Nav.Link>
                        <Nav.Link className='px-3'>FAQ</Nav.Link>
                        <Nav.Link className='px-3'>About us</Nav.Link>
                        <Nav.Link className='px-3'>Contact us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    )
}

export default BottomNavBar;