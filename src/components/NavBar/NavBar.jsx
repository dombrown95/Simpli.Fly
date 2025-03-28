import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom'; // Import React Router's Link
import './NavBar.css';

function NavBar() {
  return (
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
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/action1">Action</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/action2">Another action</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/action3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/action4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;