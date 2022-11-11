import React, { useContext, useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import ReviewList from '../ReviewList/ReviewList';
import toast from 'react-hot-toast';
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

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure you want to remove this review from this list?');
        if (proceed) {
            fetch(`https://dentistbhai-server-ehsan-info.vercel.app/reviews/${id}`, {
                method: 'DELETE',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('genius-token')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        console.log(data);
                        toast.success('Deleted Successfully');
                        const remaining = reviews.filter(odr => odr._id !== id);
                        setReviews(remaining);
                    }
                })
        }
    }
    return (
        <div className='my-4'>
            <Card.Title className='mb-4'>All Reviews for {user?.email}</Card.Title>
            {
                reviews.map(review => <ReviewList key={review._id} review={review} handleDelete={handleDelete}></ReviewList>)
            }
        </div>
    );
};

export default MyReviews;