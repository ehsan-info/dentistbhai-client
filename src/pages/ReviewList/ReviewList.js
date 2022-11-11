import React from 'react';
import Card from 'react-bootstrap/Card';
const ReviewList = ({ review }) => {
    return (
        <div>
            <Card className='my-4'>
                <Card.Header>{review.reviewerName}</Card.Header>
                <Card.Body>
                    <Card.Title>{review.serviceName}</Card.Title>
                    <Card.Text>
                        {review.comments}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ReviewList;