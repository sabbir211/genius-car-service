import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png'

const Header = () => {
    return (
        <>
           <Navbar sticky='top' collapseOnSelect expand="lg" variant="dark" style={{backgroundColor:"#00004d"}}>
  <Container>
  <Navbar.Brand as={Link} to="/" className='text-center text-md-start'>
      <img src={logo} alt="" height="40px"/>
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link as={Link} to="/">Home</Nav.Link>
      <Nav.Link href='/home#services'>Services</Nav.Link>
      <Nav.Link href="/home#experts">Experts</Nav.Link>
      </Nav>
      <Nav>
      <Nav.Link as={Link} to="/about">About</Nav.Link>
      <Nav.Link as={Link} to="/login">
        Login
      </Nav.Link>
      <Nav.Link as={Link} to="/register">
        Register
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>

        </>
    );
};

export default Header;