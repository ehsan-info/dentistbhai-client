import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
const Login = () => {

    return (
        <>
            <h2 className='text-primary'>Login !!!</h2>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicError">
                    <Form.Text className="text-danger">

                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicError">
                    <Form.Text className="text-dark font-monospace">
                        Don't have an Account ? <span><Link to='/registration'>Signup Here !!!</Link></span>
                    </Form.Text>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
        </>
    );
};

export default Login;