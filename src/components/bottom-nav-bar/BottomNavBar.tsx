import React from "react";
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {useHistory} from 'react-router-dom';

const BottomNavBar: React.FC = () => {

    let history = useHistory();

    return (
        <Container fluid={true} className='px-0'>
            <Navbar collapseOnSelect expand="md" className='border bottomNavBar pl-md-5 py-2'>
                <NavDropdown title="Categories" id="collapsible-nav-dropdown" className='border '>
                    <NavDropdown.Item onClick={() => history.push('/home/All')}>All</NavDropdown.Item>
                    <NavDropdown.Item onClick={() => history.push('/home/Grocery')}>Grocery</NavDropdown.Item>
                    <NavDropdown.Item onClick={() => history.push('/home/Pharmacy')}>Pharmacy</NavDropdown.Item>
                    <NavDropdown.Item onClick={() => history.push('/home/Food')}>Food</NavDropdown.Item>
                    <NavDropdown.Item onClick={() => history.push('/home/Electronic')}>Electronic</NavDropdown.Item>
                </NavDropdown>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link className='px-3 pl-md-5' onClick={() => history.push('/home')}>Home</Nav.Link>
                        <Nav.Link className='px-3'>FAQ</Nav.Link>
                        <Nav.Link className='px-3'>About us</Nav.Link>
                        <Nav.Link className='px-3'
                                  href={`mailto:"support@gmail.com"?subject=${encodeURIComponent("Contact Us") || ''}&body=${encodeURIComponent("Hi") || ''}`}>Contact
                            us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    )
}

export default BottomNavBar;