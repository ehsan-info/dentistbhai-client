import { GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { FaGoogle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';
const SignUp = () => {
    const [error, setError] = useState('');
    const [accepted, setAccepted] = useState(false);
    const { user, createUser, updateUserProfile, googleProviderLogin, verifyEmail } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const navigate = useNavigate();
    useTitle('SignUp');
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        // console.log(name, email, password, confirmPassword);
        if (password === confirmPassword) {
            createUser(email, password)
                .then(result => {
                    const user = result.user;
                    form.reset();
                    setError('');
                    navigate('/login');
                    handleUpdateUserProfile(name, photoURL);
                    toast.success('please login now !!!');
                })
                .catch(error => {
                    console.log(error);
                    setError(error.message);
                })
        }
        else {
            setError('Password does not match');
        }
    }
    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.log(error))
    }
    const handleAccepted = event => {
        setAccepted(event.target.checked);
    }
    const handleGoogleSignIn = () => {
        googleProviderLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate('/courses')
            })
            .catch(error => console.log(error))
    }
    return (
        <Container className='mt-4'>
            <Row>
                <Col lg='8'>
                    <h2 className='text-primary'>Sign Up Here...</h2>
                    <div>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" name='name' placeholder="Enter Name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicImage">
                                <Form.Label>Your Image</Form.Label>
                                <Form.Control type="text" name='photoURL' placeholder="Enter Image" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" name='email' placeholder="Enter email" required />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" name='password' placeholder="Password" required />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control type="password" name='confirmPassword' placeholder="Confirm Password" required />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicError">
                                <Form.Text className="text-dark font-monospace">
                                    Already have an account ? <span><Link to='/login'>Login Here !!!</Link></span>
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check
                                    type="checkbox"
                                    onClick={handleAccepted}
                                    label={<>Accept <Link to='/terms'>Terms & Conditions</Link></>} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicError">
                                <Form.Text className="text-danger">
                                    {error}
                                </Form.Text>
                            </Form.Group>
                            <Button variant="primary" type="submit" disabled={!accepted}>
                                Sign Up
                            </Button>
                        </Form>
                    </div>
                </Col>
                <Col lg='4'>
                    <div>
                        <h5>Sign Up With !!!</h5>
                        <div className="d-grid gap-2">
                            <Button onClick={handleGoogleSignIn} variant="secondary" size="lg">
                                <p className='m-0'><FaGoogle></FaGoogle><span> Google SignUp</span></p>
                            </Button>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default SignUp;