import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

function Home() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">Hello</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/">Login</Nav.Link>
            <Nav.Link href="/">Logout</Nav.Link>
            <Nav.Link href="/attendance">Mark Attendance</Nav.Link>
            <Nav.Link href="/viewlist">View Attendance List</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Home;