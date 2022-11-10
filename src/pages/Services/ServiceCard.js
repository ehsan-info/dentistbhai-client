import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { image_url, price, service_title, _id, details } = service;
    return (
        <div className="card card-compact my-2">
            <figure><img className='' src={image_url} alt="Shoes" height='200px' width='100%' /></figure>
            <div className="card-body">
                <h2 className="card-title" style={{ height: '100px' }}>{service_title}</h2>
                <p className=''>Price: {price}</p>
                <p className=''>
                    {
                        details.length > 200 ?
                            <>
                                {details.slice(0, 100) + '...'}<Link to={`/services/${_id}`}>See Details</Link>
                            </>
                            :
                            <></>
                    }
                </p>
                <div className="">
                    <Link to={`/services`}>
                        <button className="btn btn-primary">See All Services</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;