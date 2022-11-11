import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';

const AddReview = () => {
    const addReview = useLoaderData();
    const { user } = useContext(AuthContext);
    useTitle('Add Review');
    return (
        <Container className='mt-4'>
            <Row>
                <Col lg='8'>
                    <h2 className='text-primary'>Add Your Review Here...</h2>
                    <div>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" name='name' placeholder="Enter Name" defaultValue={user?.displayName} readOnly />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" name='email' placeholder="Enter email" defaultValue={user?.email} readOnly />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" name='password' placeholder="Password" required />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                                <Form.Label>Comments</Form.Label>

                                <Form.Control type="text" name='comment' placeholder="Comments" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicError">
                                <Form.Text className="text-danger">

                                </Form.Text>
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Sign Up
                            </Button>
                        </Form>
                    </div>
                </Col>
                <Col lg='4'>
                    <div>

                        <div className="d-grid gap-2">

                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default AddReview;