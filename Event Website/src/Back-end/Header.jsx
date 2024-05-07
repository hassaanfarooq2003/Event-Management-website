import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './header.css'; // Import the CSS file
import { Image } from 'react-bootstrap';
import Logo from '../Images/event-homepage.svg'
const Header = () => {
  return (
    <header>
      <Navbar expand="lg" className="navbar">
        <Container>
          <Navbar.Brand as={Link} to="/" className="navbar-brand">
            <Image
            src={Logo}
            alt='logo'
            width={120}
            height={50}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav collpase1">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/" className="nav-link">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/" className="nav-link">
                Events
              </Nav.Link>
              <Nav.Link as={Link} to="/" className="nav-link">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/" className="nav-link">
                Contact
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to="/" className="nav-link login-link">
                Login
              </Nav.Link>
              <Nav.Link as={Link} to="/" className="nav-link login-link">
                SignUp
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;