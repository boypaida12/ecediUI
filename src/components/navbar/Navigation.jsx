/* eslint-disable no-unused-vars */
import React from 'react';
import {Navbar, Container, Nav, Button} from 'react-bootstrap';

const Navigation = () => {
  return (
    <>
     <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#">CreditLink</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            {/* <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link> */}
          </Nav>
            <Button variant="outline-success" className=' me-3'>Farmer</Button>
            <Button variant="success">Buyer</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Navigation