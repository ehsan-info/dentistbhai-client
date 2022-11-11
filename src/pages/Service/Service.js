import React from 'react';
import { Button, Image } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import './Service.css';
const Service = () => {
    const singleService = useLoaderData();
    const { user } = useContext(AuthContext);
    console.log(user);
    const { _id, service_title, details, image_url, price } = singleService;

    return (
        <div>
            <div className="bg-image shadow-2-strong intro-background my-4">
                <div className="mask">
                    <div className="container d-flex align-items-center justify-content-center text-center mask-2">
                        <div className="text-white">
                            <h1 className="mb-3">Come and Visit Us !!!</h1>
                            <h5 className="mb-4">Smile Confidently</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className='d-lg-flex d-sm-block gap-3'>
                <div>
                    <div>
                        <Image fluid src={image_url} />
                        <h2>{service_title}</h2>
                        <p>Price: <span>{price}</span></p>
                        <p>{details}</p>
                    </div>

                </div>
                <div>
                    <Card className='course-right-info'>
                        <Card.Img variant="top" src='' />
                        <Card.Body>
                            <Card.Title>{user?.displayName}</Card.Title>
                            <Card.Text>
                                Email: <span>{user?.email}</span>
                            </Card.Text>
                        </Card.Body>
                        <Card.Body>
                            <Card.Link><Link to={`/addReview/${_id}`}><Button variant="outline-secondary">Add Review</Button></Link></Card.Link>
                        </Card.Body>
                    </Card>
                </div>

            </div>
        </div>
    );
};

export default Service;