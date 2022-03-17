import React from 'react';
import './Navbar.css'
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navegador() {
  return (
    <Navbar className="nav-color" bg="transparent" variant='light' expand="xl">
    <Container>
    <Navbar.Brand as={Link} to={"Home"}>
    <img
      src='/img/LOGO.png'
      width="30"
      height="30"
    />
      UmTempoEmCasa</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
        <Nav.Link as={Link} to={"/"}>Contatos</Nav.Link>
        <Nav.Link as={Link} to={"/"}>Refugiado</Nav.Link>
        <Nav.Link as={Link} to={"/"}>Anfitrião</Nav.Link>
        <Nav.Link as={Link} to={"/"}>Ongs</Nav.Link>
        <Nav.Link as={Link} to={"/"}>Imóvel</Nav.Link>
        <Nav.Link as={Link} to={"/"}>Anúncio</Nav.Link>
        <Nav.Link as={Link} to={"/"}>Reserva</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default Navegador