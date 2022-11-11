import React from 'react';
import Card from 'react-bootstrap/Card';
const ReviewList = ({ review }) => {
    const { _id, serviceName, reviewerName, comments } = review;
    return (
        <div>
            <Card>
                <Card.Header>{reviewerName}</Card.Header>
                <Card.Body>
                    <Card.Title>{serviceName}</Card.Title>
                    <Card.Text>
                        {comments}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ReviewList;