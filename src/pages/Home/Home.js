import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import BrandCarousal from '../../shared/BrandCarousal/BrandCarousal';
import Footer from '../../shared/Footer/Footer';
import Header from '../../shared/Header/Header';
import leftImage from '../../assets/interiorofnewmoderndentalclinicoffice-1.jpg';
const Home = () => {
    return (
        <>
            <Header></Header>
            <BrandCarousal></BrandCarousal>
            <Container className='my-4 bg-secondary p-2 text-dark bg-opacity-10 p-4'>
                <Row>
                    <Col lg='5' className='d-block'>
                        <img src={leftImage} alt='' className='img-fluid' />
                    </Col>
                    <Col lg='7'>
                        <h2 className='font-monospace fw-bold'>About Our <br /> Dentist<br /> Clinic</h2>
                        <p className=''>
                            About Our Dentist Clinic
                            Our clients are our priority, we offer quality dental services with a team of specialists. More details about our services below.</p>
                        <p>

                            A new modern and fully-equipped dental office situated in the centre of Dhaka. Our clinic offers you a wide range of dental treatments and our English-speaking dentists are here to help you achieve the best dental health possible. Our motto is “Happy teeth, happy smile!”
                        </p>
                    </Col>
                </Row>
            </Container>
            <div className='d-flex container justify-content-between bg-info p-4'>
                <h4>Get in touch with us today <span>(02) 9955 4239</span></h4>
                <button className='btn btn-outline-light'>Make An Appointment</button>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Home;