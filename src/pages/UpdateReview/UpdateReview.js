import React, { useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';
import toast from 'react-hot-toast';
const UpdateReview = () => {
    const review = useLoaderData();
    const { user } = useContext(AuthContext);
    const { _id, serviceName, comments } = review;
    useTitle('Update Review');
    const navigate = useNavigate();
    const handleUpdateReview = event => {
        event.preventDefault();
        // console.log(user);
        event.preventDefault();
        const form = event.target;
        const comments = form.comment.value;
        const review = {
            comments
        }
        fetch(`https://dentistbhai-server-ehsan-info.vercel.app/updateReview/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Updated Successfully');
                    console.log(data);
                    navigate('/myReviews')
                }
            })

    }
    return (
        <Container className='mt-4'>
            <Row>
                <Col lg='8'>
                    <h2 className=''>Service Name: <span>{serviceName}</span></h2>
                    <div>
                        <Form onSubmit={handleUpdateReview}>
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

                                <Form.Control type="text" name='comment' placeholder="Comments" defaultValue={comments} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicError">
                                <Form.Text className="text-danger">

                                </Form.Text>
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Update Review
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

export default UpdateReview;