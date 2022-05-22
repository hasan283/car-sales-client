import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../image/banner/logo.png';
import { Link } from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';
import { useNavigate } from "react-router-dom";

const Header = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const handleSignOut = () => {
        signOut(auth)
        navigate('/login');
    }
    return (
        <Navbar collapseOnSelect expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img src={logo} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
                    </Nav>
                    <Nav>
                        {user ? <button className='border-0 bg-dark text-white rounded' onClick={handleSignOut}>Sign Out</button>
                            :
                            <Nav.Link as={Link} to="/login"><button className='border-0 bg-dark text-white rounded'>Login</button></Nav.Link>
                        }

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;