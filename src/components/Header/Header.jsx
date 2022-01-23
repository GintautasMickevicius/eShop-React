import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="navi">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Link to="/" style={{textDecoration: 'none'}}>
            <Navbar.Brand>E-shop</Navbar.Brand>
          </Link>
          <Nav className="me-auto">
       <Link to='/Cart' style={{textDecoration: 'none', color: 'white'}}>Cart</Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
