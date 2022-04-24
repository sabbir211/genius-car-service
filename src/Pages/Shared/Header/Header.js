import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../images/logo.png'

const Header = () => {
  const [user,error]=useAuthState(auth)
  const handleLogout=()=>{
    signOut(auth)
    .then(()=>{
console.log("signout successful");
    })
    .catch((error)=>{
      console.error(error);
    })
  }
  console.log(user);
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
      <Nav.Link  href='/home#services'>Services</Nav.Link>
      <Nav.Link href="/home#experts">Experts</Nav.Link>
      
      <Nav.Link as={Link} to="/addservice">Add Service</Nav.Link>
      </Nav>
      <Nav>
      <Nav.Link as={Link} to="/about">About</Nav.Link>
     {!user?<><Nav.Link as={Link} to="/login">
        Login
      </Nav.Link>
      {error?.message}
      <Nav.Link as={Link} to="/register">
        Register
        </Nav.Link></>:<Nav.Link  onClick={handleLogout} >Logout</Nav.Link> }
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>

        </>
    );
};

export default Header;