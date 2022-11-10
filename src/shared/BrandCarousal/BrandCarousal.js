import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import slider1 from '../../assets/carousal/slider-01.jpg';
import slider2 from '../../assets/carousal/slider-02.jpg';
import slider3 from '../../assets/carousal/slider-03.jpg';
import Button from 'react-bootstrap/Button';
const BrandCarousal = () => {
    return (
        <div>
            <Carousel fade style={{ height: '600px' }} >
                <Carousel.Item>
                    <img style={{ height: '600px' }}
                        className="d-block w-100"
                        src={slider1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h2>Only One Kind Of TreatMent</h2>
                        <p>Your New Smile</p>
                        <Button variant="secondary" size="sm">
                            Discover
                        </Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{ height: '600px' }}
                        className="d-block w-100"
                        src={slider2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h2>Make Your Dental</h2>
                        <p>Experience A Lot Brighter</p>
                        <Button variant="secondary" size="sm">
                            Make An Appointment
                        </Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{ height: '600px' }}
                        className="d-block w-100"
                        src={slider3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h2>Expertise In Major</h2>
                        <p>
                            Dental Procedures
                        </p>
                        <Button variant="secondary" size="sm">
                            Consult A Dentist
                        </Button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>

    );
};

export default BrandCarousal;