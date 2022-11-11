import React, { useContext, useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import ReviewList from '../ReviewList/ReviewList';
const MyReviews = () => {
    const { user, logOut } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch(`https://dentistbhai-server-ehsan-info.vercel.app/myReviews?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('dentistBhai-token')}`
            }
        })
            .then(res => {
                // if (res.status === 401 || res.status === 403) {
                //     return logOut();
                // }
                return res.json()
            })
            .then(data => {
                console.log(data)
                setReviews(data);
            })
            .catch(error => console.log(error))
    }, [user?.email, logOut])
    return (
        <div className='my-4'>
            <Card.Title className='mb-4'>All Reviews for {user?.email}</Card.Title>
            {
                reviews.map(review => <ReviewList key={review._id} review={review}></ReviewList>)
            }
        </div>
    );
};

export default MyReviews;