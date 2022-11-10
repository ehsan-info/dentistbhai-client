import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
const SignUp = () => {
    return (
        <Container className='mt-4'>
            <Row>
                <Col lg='8'>
                    <h2 className='text-primary'>Registration !!!</h2>
                    <div>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" name='name' placeholder="Enter Name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicImage">
                                <Form.Label>Your Image</Form.Label>
                                <Form.Control type="text" name='photoURL' placeholder="Enter Image" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" name='email' placeholder="Enter email" required />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" name='password' placeholder="Password" required />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control type="password" name='confirmPassword' placeholder="Confirm Password" required />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicError">
                                <Form.Text className="text-dark font-monospace">
                                    Already have an account ? <span><Link to='/login'>Login Here !!!</Link></span>
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check
                                    type="checkbox"

                                    label={<>Accept <Link to='/terms'>Terms & Conditions</Link></>} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicError">
                                <Form.Text className="text-danger">

                                </Form.Text>
                            </Form.Group>
                            <Button variant="primary" type="submit" disabled>
                                Register
                            </Button>
                        </Form>
                    </div>
                </Col>
                <Col lg='4'>
                    <div>
                        <h5>Sign Up With !!!</h5>
                        <div className="d-grid gap-2">
                            <Button variant="secondary" size="lg">
                                <p className='m-0'><FaGoogle></FaGoogle><span> Google SignUp</span></p>
                            </Button>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default SignUp;