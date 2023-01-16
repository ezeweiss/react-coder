import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import CartWidget from './CartWidget'

const NavBar = () => {
  return (
    <>
    <Navbar fixed="top" bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/">GB Beauty Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/productos">Catálogo</Nav.Link>
            <Nav.Link href="/nosotros">Nosotros</Nav.Link>
            <Nav.Link href="/contacto">Contacto</Nav.Link>
            <Nav.Link className="" href="/carrito">0<CartWidget /></Nav.Link>
          </Nav>
        </Container>
    </Navbar>
    </>
  )
}

export default NavBar