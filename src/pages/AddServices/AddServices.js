import React, { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';
const AddServices = () => {
    const { user } = useContext(AuthContext);
    useTitle('Add Service');
    const handleAddService = event => {
        event.preventDefault();
        const form = event.target;
        const service_title = form.service_title.value;
        const price = form.price.value;
        const image_url = form.image_url.value;
        const details = form.details.value;
        const services = {
            service_title,
            price,
            image_url,
            details
        }
        fetch('https://dentistbhai-server-ehsan-info.vercel.app/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('dentistBhai-token')}`
            },
            body: JSON.stringify(services)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    form.reset();
                    alert('Service Added Successfully');
                }
            })
            .catch(error => console.log(error))
    }
    return (
        <Container className='mt-4'>
            <Row>
                <Col lg='8'>
                    <h2 className='text-primary'>Add Services Here...</h2>
                    <div>
                        <Form onSubmit={handleAddService}>
                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Label>Service Name</Form.Label>
                                <Form.Control type="text" name='service_title' placeholder="Service Name" required />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Label>Service Price</Form.Label>
                                <Form.Control type="text" name='price' placeholder="Service Price" required />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Label>Image Url</Form.Label>
                                <Form.Control type="text" name='image_url' placeholder="Image Url" required />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Label>Details</Form.Label>
                                <Form.Control type="text" name='details' placeholder="Details" required />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicError">
                                <Form.Text className="text-danger">
                                </Form.Text>
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Add Service
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

export default AddServices;