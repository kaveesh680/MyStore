import React from "react";
import {Container, Nav, Navbar} from "react-bootstrap";
import {useHistory} from 'react-router-dom';

const AdminNavBar: React.FC = () => {

    let history = useHistory();

    return (
        <Container fluid={true} className='px-0'>
            <Navbar collapseOnSelect expand="md" className='border bottomNavBar pl-md-5 py-2'>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link className='px-3 pl-md-5' onClick={() => history.push('/admin/dashboard')}>DashBoard</Nav.Link>
                        <Nav.Link className='px-3' onClick={() => history.push('/admin/products')}>Products</Nav.Link>
                        <Nav.Link className='px-3' onClick={() => history.push('/admin/orders')}>Orders</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    )
}

export default AdminNavBar;