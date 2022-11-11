import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
const ReviewList = ({ review, handleDelete }) => {
    return (
        <div>
            <Card className='my-4'>
                <Card.Header>{review.reviewerName}</Card.Header>
                <Card.Body>
                    <Card.Title>{review.serviceName}</Card.Title>
                    <Card.Text>
                        {review.comments}
                    </Card.Text>
                    <Button onClick={() => handleDelete(review._id)} variant="light" className='me-3'>Delete</Button>
                    <Link to={`/updateReview/${review._id}`}><Button variant="light">Edit</Button></Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ReviewList;