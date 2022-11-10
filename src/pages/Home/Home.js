import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import BrandCarousal from '../../shared/BrandCarousal/BrandCarousal';
import Footer from '../../shared/Footer/Footer';
import Header from '../../shared/Header/Header';
import Image from 'react-bootstrap/Image'
import leftImage from '../../assets/interiorofnewmoderndentalclinicoffice-1.jpg';
const Home = () => {
    return (
        <>
            <Header></Header>
            <BrandCarousal></BrandCarousal>
            <Container>
                <Row>
                    <Col lg='5' className='d-none d-lg-block'>
                        <Image style={{ height: 'auto' }} src={leftImage}></Image>
                    </Col>
                    <Col lg='7'>

                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </>
    );
};

export default Home;