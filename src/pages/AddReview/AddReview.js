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
    const service = useLoaderData();
    const { user } = useContext(AuthContext);
    const { _id, service_title } = service;
    useTitle('Add Review');
    const handleAddReview = (event) => {
        event.preventDefault();
        const form = event.target;
        const reviewerName = user?.displayName;
        const email = user?.email || 'unregistered';
        const comments = form.comment.value;
        const addTime = new Date();
        const review = {
            service: _id,
            serviceName: service_title,
            reviewerName,
            email,
            comments,
            addTime
        }
        fetch('https://dentistbhai-server-ehsan-info.vercel.app/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('dentistBhai-token')}`
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    form.reset();
                    alert('Review Added Successfully');
                }
            })
            .catch(error => console.log(error))
    }
    return (
        <Container className='mt-4'>
            <Row>
                <Col lg='8'>
                    <h2 className=''>Service Name: <span>{service_title}</span></h2>
                    <h2 className='text-primary'>Add Your Review Here...</h2>
                    <div>
                        <Form onSubmit={handleAddReview}>
                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" name='name' placeholder="Enter Name" defaultValue={user?.displayName} readOnly />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" name='email' placeholder="Enter email" defaultValue={user?.email} readOnly />
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
                                Add Review
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