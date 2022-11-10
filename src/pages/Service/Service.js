import React from 'react';
import { Button, Image } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
const Service = () => {
    const singleService = useLoaderData();
    console.log('check data', singleService);
    const { user } = useContext(AuthContext);
    const { _id, service_title, details, image_url, price } = singleService;
    return (
        <div>
            <div className="bg-image shadow-2-strong intro-background my-4">
                <div className="mask">
                    <div className="container d-flex align-items-center justify-content-center text-center mask-2">
                        <div className="text-white">
                            <h1 className="mb-3">Become An Expert !!!</h1>
                            <h5 className="mb-4">Try Out These Courses</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className='d-lg-flex d-sm-block gap-3'>
                <div>
                    <Image fluid src={image_url} />
                    <h2>{service_title}</h2>
                    <p>{details}</p>
                </div>
                <div>
                    <Card className='course-right-info'>
                        <Card.Img variant="top" src='' />
                        <Card.Body>
                            <Card.Title>jamal</Card.Title>
                            <Card.Text>
                                Position: <span>kalam</span>
                            </Card.Text>
                            <Card.Text>
                                Publish Date: <span>5th</span>
                            </Card.Text>
                            <Card.Text>
                                Price: <span>{price}</span>
                            </Card.Text>
                        </Card.Body>
                        <Card.Body>
                            <Card.Link><Link to={`/checkout/${_id}`}><Button variant="outline-secondary">Enroll</Button></Link></Card.Link>
                            <Card.Link><Link to={`/checkout/${_id}`}><Button variant="outline-secondary">Get Premium Access</Button></Link></Card.Link>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Service;