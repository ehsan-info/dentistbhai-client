import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';
import { Col, Container, Row } from 'react-bootstrap';
const Services = () => {
    const [services, setService] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => {
                setService(data)
            })
    }, [])
    return (
        <div>
            <div className='text-center mb-4'>
                <h2 className='text-5xl font-semibold'>Our Service Area</h2>
            </div>
            <Container>
                <Row>
                    {
                        services.map(service => <Col lg='4'><ServiceCard key={service._id} service={service}></ServiceCard></Col>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Services;