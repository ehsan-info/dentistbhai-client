import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import logo from '../../assets/logo/logo.png';
import { Button } from 'react-bootstrap';
const Header = () => {
    return (
        <div>
            <Navbar>
                <Container>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end text-sm-center d-sm-block">

                        <Navbar.Text>
                            Signed in as: <span></span>
                        </Navbar.Text>

                        <FaUser></FaUser>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand>
                        <Link to='/'><Image style={{ height: '40px' }} src={logo}></Image></Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link><Link to='/'><Button variant="light">Home</Button></Link></Nav.Link>
                            <Nav.Link><Link to='/services'><Button variant="light">Services</Button></Link></Nav.Link>
                            <Nav.Link><Link to='/blog'><Button variant="light">Blog</Button></Link></Nav.Link>
                            <Nav.Link><Link to='/blog'><Button variant="light">My Reviews</Button></Link></Nav.Link>
                            <Nav.Link><Link to='/blog'><Button variant="light">Add Services</Button></Link></Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">More deets</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                Dank memes
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;