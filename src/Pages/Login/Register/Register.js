import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
    const handleRegisterSubmit=(e)=>{
        e.preventDefault()
    }
    return (
        <div className='w-25 mx-auto mt-5 border p-4 rounded'>
            <h2 style={{color:"#00004d",textAlign:"center"}}>Register</h2>
            <Form onSubmit={handleRegisterSubmit} >
  <Form.Group className="mb-3" controlId="formBasicEmail ">
    <Form.Label>Your Name </Form.Label>
    <Form.Control  type="email" placeholder="Enter email" required/>
   
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail ">
    <Form.Label>Email address</Form.Label>
    <Form.Control  type="email" placeholder="Enter email" required/>
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control  type="password" placeholder="Password" required/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button  type="submit" style={{backgroundColor:"#00004d"}}>
    Login
  </Button>
</Form>
<p>Already have account? <Link to="/login" className='text-decoration-none'>Login</Link></p>
        </div>
    );
};

export default Register;