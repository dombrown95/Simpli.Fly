import React, { useState, useEffect } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import LoginModal from '../Login/LoginModal';
import './NavBar.css';

function NavBar() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem('username');
    if (user) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('username');
    setIsAuthenticated(false);
    navigate('/');
  };

  const handleLoginShow = () => setShowLoginModal(true);
  const handleLoginClose = () => setShowLoginModal(false);

  return (
    <>
      <Navbar expand="lg" className="bg-light" variant="light">
        <Container className="navbar-main">
          <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
            <img
              src="/assets/images/LogoImage.png"
              alt="Simpli.Fly Logo"
              width="40"
              height="35"
              className="d-inline-block align-top me-2"
            />
            Simpli.Fly
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/cargo">Inventory Management</Nav.Link>
              <NavDropdown title="Account" id="basic-nav-dropdown">
                {isAuthenticated ? (
                  <NavDropdown.Item as="button" onClick={handleLogout}>
                    Logout
                  </NavDropdown.Item>
                ) : (
                  <NavDropdown.Item as="button" onClick={handleLoginShow}>
                    Login
                  </NavDropdown.Item>
                )}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <LoginModal show={showLoginModal} handleClose={handleLoginClose} />
    </>
  );
}

export default NavBar;