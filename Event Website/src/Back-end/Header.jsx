import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import './header.css'
import { Image } from 'react-bootstrap'
import Logo from '../Images/event-homepage.svg'

const Header = () => {
  return (
    <header>
      <Navbar expand='lg' className='navbar'>
        <Container>
          <Navbar.Brand as={Link} to='/' className='navbar-brand'>
            <Image src={Logo} alt='logo' width={120} height={50} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav collpase1'>
            <Nav className='me-auto'>
              <Nav.Link as={NavLink} to='/' className='nav-link'>
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to='/events' className='nav-link'>
                Events
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to='/#about'
                className='nav-link'
                onClick={e => {
                  e.preventDefault()
                  document
                    .querySelector('#about')
                    .scrollIntoView({ behavior: 'smooth' })
                }}
              >
                About
              </Nav.Link>
              <Nav.Link as={NavLink} to='/create-card' className='nav-link'>
                Create Card
              </Nav.Link>
              <Nav.Link as={NavLink} to='/my-cards' className='nav-link'>
                My Cards
              </Nav.Link>
              <Nav.Link as={NavLink} to='/reserved-cards' className='nav-link'>
                Reserved Cards
              </Nav.Link>
              <Nav.Link as={NavLink} to='/contact' className='nav-link'>
                Contact
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link
                as={NavLink}
                to='/login'
                className='nav-link login-link'
              >
                Login
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to='/signup'
                className='nav-link login-link'
              >
                Sign Up
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
