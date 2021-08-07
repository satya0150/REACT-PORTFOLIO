import React from "react";
import { Navbar, Nav, Container } from 'react-bootstrap';

function Navigation() {
    return (
        <Navbar collapseOnSelect expand="lg" fixed="top">
            <Container>
                <Navbar.Brand className='logo' href="#">Satyam.</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
                    <Nav  variant="tabs" defaultActiveKey="#home">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#skill">Skills</Nav.Link>
                        <Nav.Link href="#experience">Experience</Nav.Link>
                        <Nav.Link href="#">Contact Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;