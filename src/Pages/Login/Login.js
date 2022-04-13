import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
    const emailRef=useRef()
    const passwordRef=useRef()
const handleSubmit=event=>{
    event.preventDefault()
    const email=emailRef.current.value
    const password=passwordRef.current.value
    console.log(email,password);
}
    return (
        <div className='w-25 mx-auto mt-5 border p-4 rounded'>
            <h2 style={{color:"#00004d",textAlign:"center"}}>Log in </h2>
            <Form onSubmit={handleSubmit} >
  <Form.Group className="mb-3" controlId="formBasicEmail ">
    <Form.Label>Email address</Form.Label>
    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required/>
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control ref={passwordRef} type="password" placeholder="Password" required/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button  type="submit" style={{backgroundColor:"#00004d"}}>
    Login
  </Button>
</Form>
<p>New to genius car? <Link to="/register" className='text-decoration-none'>register</Link></p>
        </div>
    );
};

export default Login;